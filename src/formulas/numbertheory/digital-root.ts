import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
function dr(n:number):number{return n<10?n:dr(Math.floor(n/10)+(n%10));}
export default {
  meta:{slug:'digital-root',title:'数字根 (mod 9)',domain:'numbertheory',level:1,tex:'\\text{dr}(n)=1+(n-1)\\bmod 9',blurb:'1..N 数字根模式。'},
  params:[i('N','N',100,10,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number; const cols=Math.ceil(Math.sqrt(N));
    const cw=Math.min(width,height)/cols;
    const ox=(width-cw*cols)/2, oy=(height-cw*cols)/2;
    for(let n=1;n<=N;n++){const r=Math.floor((n-1)/cols), c=(n-1)%cols; const d=dr(n);
      ctx.fillStyle=`hsl(${d*40},70%,55%)`; ctx.fillRect(ox+c*cw+1, oy+r*cw+1, cw-2, cw-2);
      if(cw>14){ctx.fillStyle='#0a0e14'; ctx.font=`${cw*0.4}px ui-monospace,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(String(d), ox+c*cw+cw/2, oy+r*cw+cw/2);}}
  },
} satisfies Formula;
