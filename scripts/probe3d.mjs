import { chromium } from 'playwright';
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 400, height: 250 } });
const p = await ctx.newPage();
p.on('pageerror', e => console.log('[err]', e.message));
await p.goto('http://127.0.0.1:4173/f/mitochondrion.html?mode=play', { waitUntil: 'networkidle' });
await p.waitForSelector('canvas');
await p.addStyleTag({ content: `.params-pane,.formula-floating,.detail-bar,.notes-pane,.breadcrumbs,.topbar{display:none!important}.canvas-pane,.canvas-wrap{inset:0!important;position:fixed!important}body{margin:0;padding:0}` });
await p.evaluate(() => window.dispatchEvent(new Event('resize')));
await p.waitForTimeout(1500);
const buf = await p.locator('canvas').first().screenshot({ type: 'png' });
const fs = await import('node:fs');
fs.writeFileSync('/tmp/mito.png', buf);
console.log('png bytes:', buf.length);
// sample center
const px = await p.evaluate(() => {
  const c = document.querySelector('canvas');
  const gl = c.getContext('webgl2');
  const data = new Uint8Array(4);
  gl.readPixels(c.width/2, c.height/2, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, data);
  return [...data];
});
console.log('center pixel RGBA:', px);
await b.close();
