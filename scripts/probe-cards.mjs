import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 1400, height: 2400 } });
const p = await ctx.newPage();
await p.goto('https://math.htpu.net/domain/biology', { waitUntil: 'networkidle' });
await p.waitForTimeout(2000);
await p.evaluate(() => window.scrollTo(0, 5000));
await p.waitForTimeout(2000);
await p.evaluate(() => window.scrollTo(0, 10000));
await p.waitForTimeout(2000);
const result = await p.evaluate(() => {
  const cards = document.querySelectorAll('.card');
  const failed = [];
  for (const c of cards) {
    const t = c.querySelector('.title')?.textContent || '';
    const img = c.querySelector('img.thumb');
    if (!img) { failed.push({ title: t, reason: 'no img element' }); continue; }
    if (img.style.display === 'none') { failed.push({ title: t, src: img.src, reason: 'hidden by onerror' }); continue; }
    if (!img.complete) { failed.push({ title: t, src: img.src, reason: 'not loaded' }); continue; }
    if (img.naturalWidth === 0) { failed.push({ title: t, src: img.src, reason: 'zero natural width' }); continue; }
  }
  return { total: cards.length, failed };
});
console.log(JSON.stringify(result, null, 2));
await b.close();
