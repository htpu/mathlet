import { chromium } from 'playwright';
async function main() {
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 800 } });
  const page = await ctx.newPage();
  const reqs: string[] = [];
  page.on('request', r => { if (r.url().includes('/assets/')) reqs.push(r.url().split('/').pop()!); });
  page.on('response', r => { if (r.url().includes('/assets/') && r.status()>=400) console.log('BAD:',r.status(),r.url()); });
  await page.goto(`https://math.htpu.net/f/de-moivre?mode=play`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);
  console.log('assets loaded:', reqs.filter(r=>r.includes('moivre')||r.includes('detail')||r.includes('main')||r.includes('formulas')).join(', '));
  console.log('total assets:', reqs.length);
  await browser.close();
}
main();
