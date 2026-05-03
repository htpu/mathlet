import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { execFileSync } from 'node:child_process';

const ROOT = resolve(import.meta.dirname, '..');
const FORMULAS_DIR = join(ROOT, 'src/formulas');
const META_OUT = join(FORMULAS_DIR, '_registry.generated.ts');
const LOADERS_OUT = join(FORMULAS_DIR, '_loaders.generated.ts');

interface Entry { domain: string; slug: string; path: string; }

function scan(): Entry[] {
  const out: Entry[] = [];
  for (const domain of readdirSync(FORMULAS_DIR)) {
    const dp = join(FORMULAS_DIR, domain);
    if (!statSync(dp).isDirectory()) continue;
    if (domain.startsWith('_')) continue;
    for (const file of readdirSync(dp)) {
      if (!file.endsWith('.ts') || file.startsWith('_')) continue;
      const slug = file.replace(/\.ts$/, '');
      out.push({ domain, slug, path: `./${domain}/${slug}` });
    }
  }
  return out;
}

function extractMeta(path: string) {
  const src = readFileSync(path, 'utf8');
  const m = src.match(/meta:\s*\{([\s\S]*?)\}\s*,\s*params/);
  const block = m ? m[1] : '';
  const get = (k: string): string | null => {
    // Allow escaped quotes inside single/double/backtick strings.
    const re = new RegExp(`${k}\\s*:\\s*(?:'((?:[^'\\\\]|\\\\.)*)'|"((?:[^"\\\\]|\\\\.)*)"|\`((?:[^\`\\\\]|\\\\.)*)\`|(\\d+))`);
    const r = block.match(re) ?? src.match(re);
    return r ? (r[1] ?? r[2] ?? r[3] ?? r[4]) : null;
  };
  return {
    slug: get('slug') ?? '',
    title: get('title') ?? '',
    domain: get('domain') ?? '',
    level: parseInt(get('level') ?? '3'),
    tex: get('tex') ?? '',
    blurb: get('blurb') ?? '',
    surface: get('surface') ?? 'canvas2d',
    animated: /animated:\s*true/.test(src),
  };
}

const entries = scan();
const records: { slug: string; path: string; meta: ReturnType<typeof extractMeta> }[] = [];
const seen = new Set<string>();
for (const e of entries) {
  const meta = extractMeta(join(FORMULAS_DIR, e.domain, e.slug + '.ts'));
  if (!meta.slug) continue;
  if (seen.has(meta.title || e.slug)) continue;
  seen.add(meta.title || e.slug);
  records.push({ slug: e.slug, path: e.path, meta });
}

// Captured bytes from source already contain escape sequences (\\, \').
// Backslashes pass through. But tex may originate from a "double-quoted"
// source string with literal single quotes inside, which would break our
// single-quoted output. Escape any unescaped ' character.
const escapeStr = (s: string) => s.replace(/(^|[^\\])'/g, "$1\\'");

// Lightweight metadata file
const metaLines: string[] = [
  '// AUTO-GENERATED — do not edit. Run: npm run registry',
  "import type { Domain, Level, SurfaceKind } from './types';",
  '',
  'export interface RegistryEntry {',
  '  slug: string; title: string; domain: Domain; level: Level;',
  '  tex: string; blurb: string; surface: SurfaceKind; animated: boolean;',
  '}',
  '',
  'export const REGISTRY: RegistryEntry[] = [',
];
for (const r of records) {
  const m = r.meta;
  metaLines.push(`  { slug: '${r.slug}', title: '${escapeStr(m.title)}', domain: '${m.domain}' as Domain, level: ${m.level} as Level, tex: '${escapeStr(m.tex)}', blurb: '${escapeStr(m.blurb)}', surface: '${m.surface}' as SurfaceKind, animated: ${m.animated} },`);
}
metaLines.push('];');
metaLines.push('');
writeFileSync(META_OUT, metaLines.join('\n'));

// Loaders file (only imported by detail page)
const loaderLines: string[] = [
  '// AUTO-GENERATED — do not edit. Run: npm run registry',
  'export const LOADERS: Record<string, () => Promise<{ default: any }>> = {',
];
for (const r of records) loaderLines.push(`  '${r.slug}': () => import('${r.path}'),`);
loaderLines.push('};');
loaderLines.push('');
writeFileSync(LOADERS_OUT, loaderLines.join('\n'));

// Keep public/all-slugs.json in sync (consumed by audit & thumb scripts).
const slugList = records.map(r => r.slug).sort();
writeFileSync(resolve('public', 'all-slugs.json'), JSON.stringify(slugList));

// public/recent.json — top 24 slugs by git-first-add timestamp desc. The home
// page "Recently added" row reads this so order reflects real add time, not
// alphabetic-tail of the registry.
try {
  const out = execFileSync(
    'git',
    ['log', '--diff-filter=A', '--name-only', '--reverse', '--format=COMMIT %at', '--', 'src/formulas/'],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 50 * 1024 * 1024 },
  );
  const slugToTs = new Map<string, number>();
  let cur = 0;
  for (const line of out.split('\n')) {
    if (line.startsWith('COMMIT ')) {
      cur = parseInt(line.slice(7), 10) || 0;
    } else if (line.startsWith('src/formulas/') && line.endsWith('.ts')) {
      const slug = line.slice(line.lastIndexOf('/') + 1).replace(/\.ts$/, '');
      if (!slugToTs.has(slug) && cur) slugToTs.set(slug, cur);
    }
  }
  const validSlugs = new Set(records.map(r => r.slug));
  for (const r of records) {
    if (!slugToTs.has(r.slug)) {
      try {
        const fp = join(FORMULAS_DIR, r.path.replace(/^\.\//, '') + '.ts');
        slugToTs.set(r.slug, Math.floor(statSync(fp).mtimeMs / 1000));
      } catch { /* ignore */ }
    }
  }
  const ranked = [...slugToTs.entries()]
    .filter(([s]) => validSlugs.has(s))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 24)
    .map(([slug, ts]) => ({ slug, ts }));
  writeFileSync(resolve('public', 'recent.json'), JSON.stringify(ranked));
} catch (e) {
  console.warn('registry: skip recent.json —', (e as Error).message);
}

console.log(`registry: ${records.length} formulas → metadata + loaders split + all-slugs.json + recent.json`);
