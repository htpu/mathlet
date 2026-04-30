import { chromium } from 'playwright';
async function main() {
  const slugs = ['gamma-function','lenia','reaction-diffusion','turing-stripes','cahn-hilliard','limacon','circular-restricted'];
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 800, height: 600 } });
  const page = await ctx.newPage();
  for (const slug of slugs) {
    await page.goto(`https://math.htpu.net/f/${slug}?mode=play`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(5000);
    const info = await page.evaluate(() => {
      const cv = document.querySelector('canvas') as HTMLCanvasElement;
      if (!cv) return { ok: false, reason: 'no-canvas' };
      const ctx2 = cv.getContext('2d');
      if (!ctx2) return { ok: false, reason: 'no-2d' };
      const w = cv.width, h = cv.height;
      const stride = Math.max(2, Math.floor(Math.min(w,h)/200));
      const img = ctx2.getImageData(0,0,w,h).data;
      let nonBg=0, sum=0, sumSq=0, n=0;
      for (let py=0; py<h; py+=stride) for (let px=0; px<w; px+=stride) {
        const k=(py*w+px)*4; const v=(img[k]+img[k+1]+img[k+2])/3;
        if (Math.abs(v-14.7)>6) nonBg++;
        sum+=v; sumSq+=v*v; n++;
      }
      const mean=sum/n; const stdev=Math.sqrt(Math.max(0,sumSq/n-mean*mean));
      return { ok:(nonBg>50&&stdev>1)||(stdev>5), reason:`nonBg=${nonBg}/${n}, stdev=${stdev.toFixed(2)}, mean=${mean.toFixed(1)}` };
    });
    console.log(slug, JSON.stringify(info));
  }
  await browser.close();
}
main();
