import { chromium, type Browser } from 'playwright';
import { readFileSync, mkdirSync, existsSync, writeFileSync, rmSync, copyFileSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const URL_BASE = process.env.THUMB_URL ?? 'http://localhost:4173';
const OUT_DIR = 'public/thumbs';
const DIST_DIR = 'dist/thumbs';
const FRAMES = 24;
const FRAME_INTERVAL_MS = 80;
const VIEWPORT = { width: 400, height: 250 };
const THUMB_W = 320;
const THUMB_H = 200;
const WORKERS = 4;
const FORCE = process.argv.includes('--force');

const slugs: string[] = JSON.parse(readFileSync('public/all-slugs.json', 'utf8'));
mkdirSync(OUT_DIR, { recursive: true });

async function processSlug(browser: Browser, slug: string, idx: number, total: number): Promise<{ slug: string; ok: boolean; reason?: string }> {
  const out = join(OUT_DIR, `${slug}.webp`);
  if (!FORCE && existsSync(out)) {
    return { slug, ok: true, reason: 'cached' };
  }
  const ctx = await browser.newContext({ viewport: VIEWPORT });
  const page = await ctx.newPage();
  const tmpDir = join(tmpdir(), `mathlet-thumb-${slug.replace(/[^a-z0-9]/gi, '_')}-${process.pid}`);
  mkdirSync(tmpDir, { recursive: true });
  try {
    await page.goto(`${URL_BASE}/f/${slug}.html?mode=play`, { waitUntil: 'networkidle', timeout: 20000 });
    await page.waitForSelector('canvas', { timeout: 5000 });
    await page.addStyleTag({ content: `
      .params-pane, .params-pane.floating, .formula-floating,
      .detail-bar, .notes-pane, .breadcrumbs, .topbar { display: none !important; }
      .canvas-pane, .canvas-wrap { inset: 0 !important; position: fixed !important; }
      body { margin: 0 !important; padding: 0 !important; }
    ` });
    // Force re-measure now that UI panels are hidden (canvas may have
    // initialized at zero/wrong size before).
    await page.evaluate(() => window.dispatchEvent(new Event('resize')));
    await page.waitForTimeout(800);
    const canvas = page.locator('canvas').first();
    for (let f = 0; f < FRAMES; f++) {
      const buf = await canvas.screenshot({ type: 'png' });
      writeFileSync(join(tmpDir, `f${String(f).padStart(3, '0')}.png`), buf);
      if (f < FRAMES - 1) await page.waitForTimeout(FRAME_INTERVAL_MS);
    }
    // First pass: ffmpeg scales each frame to thumbnail dim
    const scaledDir = join(tmpDir, 'scaled');
    mkdirSync(scaledDir, { recursive: true });
    const scaleR = spawnSync('ffmpeg', [
      '-y', '-loglevel', 'error',
      '-i', join(tmpDir, 'f%03d.png'),
      '-vf', `scale=${THUMB_W}:${THUMB_H}:force_original_aspect_ratio=increase,crop=${THUMB_W}:${THUMB_H}`,
      join(scaledDir, 's%03d.png'),
    ], { stdio: 'pipe' });
    if (scaleR.status !== 0) {
      return { slug, ok: false, reason: 'ffmpeg scale: ' + scaleR.stderr.toString().slice(0, 200) };
    }
    // img2webp: animated WebP from PNG frames
    const frameFiles = Array.from({ length: FRAMES }, (_, i) => join(scaledDir, `s${String(i + 1).padStart(3, '0')}.png`));
    const r = spawnSync('img2webp', [
      '-loop', '0',
      '-d', '83',
      '-q', '55',
      '-m', '4',
      '-mixed',
      ...frameFiles,
      '-o', out,
    ], { stdio: 'pipe' });
    if (r.status !== 0) {
      return { slug, ok: false, reason: 'ffmpeg: ' + r.stderr.toString().slice(0, 200) };
    }
    // Mirror to dist/thumbs/ if a build exists, so a freshly-generated thumb
    // is served by the running preview without needing a rebuild.
    if (existsSync('dist')) {
      mkdirSync(DIST_DIR, { recursive: true });
      try { copyFileSync(out, join(DIST_DIR, `${slug}.webp`)); } catch {}
    }
    console.log(`[${idx + 1}/${total}] ${slug} ✓`);
    return { slug, ok: true };
  } catch (e: any) {
    return { slug, ok: false, reason: e.message?.split('\n')[0] };
  } finally {
    rmSync(tmpDir, { recursive: true, force: true });
    await ctx.close();
  }
}

async function worker(browser: Browser, queue: { slug: string; idx: number }[], total: number, fails: any[]) {
  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) break;
    const r = await processSlug(browser, item.slug, item.idx, total);
    if (!r.ok) {
      console.log(`[${item.idx + 1}/${total}] ${item.slug} FAIL ${r.reason}`);
      fails.push(r);
    }
  }
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const queue = slugs.map((slug, idx) => ({ slug, idx }));
  const total = slugs.length;
  const fails: any[] = [];
  await Promise.all(Array.from({ length: WORKERS }, () => worker(browser, queue, total, fails)));
  await browser.close();
  console.log(`\ndone: ${total - fails.length}/${total} ok`);
  if (fails.length) {
    console.log('fails:');
    for (const f of fails) console.log(`  ${f.slug}: ${f.reason}`);
  }
}
main();
