import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'quadratic-residues',title:'二次剩余模 p',domain:'numbertheory',level:3,tex:'a\\equiv b^2\\pmod p',blurb:'p×p 网格，标记是否为二次剩余。',surface:'canvas2d'},
  params:[i('p','p',47,5,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const pp=p.p as number;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const isQR=new Uint8Array(pp);
    for(let b=0;b<pp;b++) isQR[(b*b)%pp]=1;
    const cw=Math.min(width,height)/pp;
    const ox=(width-cw*pp)/2, oy=(height-cw*pp)/2;
    for(let i=0;i<pp;i++) for(let j=0;j<pp;j++){
      const a=(i*j)%pp;
      ctx.fillStyle=isQR[a]?'#ffb454':'#1f2430';
      ctx.fillRect(ox+i*cw, oy+j*cw, cw-0.5, cw-0.5);
    }
  },
} satisfies Formula;
