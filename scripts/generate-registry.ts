import { readdirSync, statSync, writeFileSync, readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const FORMULAS_DIR = join(ROOT, 'src/formulas');
const OUT = join(FORMULAS_DIR, '_registry.generated.ts');

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

function extractMeta(path: string): { domain: string; level: number; tex: string; title: string; blurb: string; surface: string; animated: boolean } | null {
  const src = readFileSync(path, 'utf8');
  const m = src.match(/meta:\s*\{([\s\S]*?)\}\s*,\s*params/);
  if (!m) {
    const m2 = src.match(/\{[\s\S]*?slug:[\s\S]*?surface:[\s\S]*?\}/);
    if (!m2) return null;
  }
  const block = m ? m[1] : '';
  const get = (k: string): string | null => {
    const re = new RegExp(`${k}\\s*:\\s*(?:'([^']*)'|"([^"]*)"|\`([^\`]*)\`|(\\d+))`);
    const r = block.match(re) ?? src.match(re);
    return r ? (r[1] ?? r[2] ?? r[3] ?? r[4]) : null;
  };
  const slug = get('slug') ?? '';
  const title = get('title') ?? slug;
  const domain = get('domain') ?? '';
  const level = parseInt(get('level') ?? '3');
  const tex = get('tex') ?? '';
  const blurb = get('blurb') ?? '';
  const surface = get('surface') ?? 'canvas2d';
  const animated = /animated:\s*true/.test(src);
  return { domain, level, tex, title, blurb, surface, animated };
}

const entries = scan();
const lines: string[] = [];
lines.push('// AUTO-GENERATED — do not edit. Run: npm run registry');
lines.push('import type { Domain, Level, SurfaceKind } from \'./types\';');
lines.push('');
lines.push('export interface RegistryEntry {');
lines.push('  slug: string; title: string; domain: Domain; level: Level;');
lines.push('  tex: string; blurb: string; surface: SurfaceKind; animated: boolean;');
lines.push('}');
lines.push('');
lines.push('export const REGISTRY: RegistryEntry[] = [');

const seen = new Set<string>();
const records: { slug: string; path: string }[] = [];
for (const e of entries) {
  const meta = extractMeta(join(FORMULAS_DIR, e.domain, e.slug + '.ts'));
  if (!meta) continue;
  if (seen.has(meta.title || e.slug)) continue;
  seen.add(meta.title || e.slug);
  const slug = e.slug;
  records.push({ slug, path: e.path });
  const escapeStr = (s: string) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  lines.push(`  { slug: '${slug}', title: '${escapeStr(meta.title)}', domain: '${meta.domain}' as Domain, level: ${meta.level} as Level, tex: '${escapeStr(meta.tex)}', blurb: '${escapeStr(meta.blurb)}', surface: '${meta.surface}' as SurfaceKind, animated: ${meta.animated} },`);
}
lines.push('];');
lines.push('');
lines.push('export const LOADERS: Record<string, () => Promise<{ default: any }>> = {');
for (const r of records) {
  lines.push(`  '${r.slug}': () => import('${r.path}'),`);
}
lines.push('};');
lines.push('');

writeFileSync(OUT, lines.join('\n'));
console.log(`registry: ${records.length} formulas → ${OUT}`);
