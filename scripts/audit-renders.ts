import { chromium } from 'playwright';
import { readFileSync, writeFileSync } from 'node:fs';

const URL_BASE = process.env.AUDIT_URL ?? 'https://math.htpu.net';
const slugs = readFileSync('public/all-slugs.json', 'utf8') ? JSON.parse(readFileSync('public/all-slugs.json', 'utf8')) : [];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 800, height: 600 } });
  const fails: { slug: string; reason: string }[] = [];
  const passes: string[] = [];
  let page = await ctx.newPage();
  page.on('pageerror', err => { (page as any)._lastErr = err.message; });
  for (let i = 0; i < slugs.length; i++) {
    const slug = slugs[i];
    (page as any)._lastErr = '';
    try {
      await page.goto(`${URL_BASE}/f/${slug}?mode=play`, { waitUntil: 'networkidle', timeout: 15000 });
    } catch (e: any) {
      fails.push({ slug, reason: 'nav: ' + e.message.split('\n')[0] });
      console.log(`[${i+1}/${slugs.length}] ${slug} FAIL nav`);
      continue;
    }
    await page.waitForTimeout(1500);
    const result = await page.evaluate(() => {
      const cv = document.querySelector('canvas') as HTMLCanvasElement | null;
      if (!cv) return { ok: false, reason: 'no-canvas' };
      const w = cv.width, h = cv.height;
      if (w < 10 || h < 10) return { ok: false, reason: `tiny ${w}x${h}` };
      const ctx2d = cv.getContext('2d');
      if (ctx2d) {
        try {
          const stride = Math.max(2, Math.floor(Math.min(w, h) / 200));
          const img = ctx2d.getImageData(0, 0, w, h).data;
          let nonBg = 0; let sum = 0; let sumSq = 0; let n = 0;
          for (let py = 0; py < h; py += stride) {
            for (let px = 0; px < w; px += stride) {
              const k = (py * w + px) * 4;
              const v = (img[k] + img[k+1] + img[k+2]) / 3;
              if (Math.abs(v - 14.7) > 6) nonBg++;
              sum += v; sumSq += v*v; n++;
            }
          }
          const mean = sum/n; const stdev = Math.sqrt(Math.max(0, sumSq/n - mean*mean));
          // Pass if: drawn shapes (small nonBg + stdev) OR uniform colored fill (most non-bg)
          const ok = (nonBg > 50 && stdev > 1.0)
                   || (nonBg > n * 0.5 && Math.abs(mean - 14.7) > 4);
          return { ok, reason: `nonBg=${nonBg}/${n}, stdev=${stdev.toFixed(2)}, mean=${mean.toFixed(1)}`, w, h };
        } catch (e) {
          // probably webgl
          try {
            const url = cv.toDataURL('image/png');
            return { ok: url.length > 8000, reason: `webgl, png=${url.length}`, w, h };
          } catch { return { ok: false, reason: 'getImageData+toDataURL both failed' }; }
        }
      }
      try {
        const url = cv.toDataURL('image/png');
        return { ok: url.length > 8000, reason: `webgl, png=${url.length}`, w, h };
      } catch { return { ok: false, reason: 'no 2d ctx, toDataURL failed' }; }
    });
    const err = (page as any)._lastErr;
    if (!result.ok) {
      const reason = (err ? `JS_ERR: ${err}; ` : '') + result.reason;
      fails.push({ slug, reason });
      console.log(`[${i+1}/${slugs.length}] ${slug} FAIL ${reason}`);
    } else {
      passes.push(slug);
      if ((i+1) % 25 === 0) console.log(`[${i+1}/${slugs.length}] ${slug} ok`);
    }
  }
  await browser.close();
  const out = `passes: ${passes.length}\nfails: ${fails.length}\n\n` + fails.map(f => `${f.slug}: ${f.reason}`).join('\n');
  writeFileSync('audit-result.txt', out);
  console.log('\n=== SUMMARY ===');
  console.log(out);
}
main();
