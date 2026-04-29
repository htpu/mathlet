import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
function fact(k:number){let r=1; for(let i=2;i<=k;i++) r*=i; return r;}
export default {
  meta:{slug:'poisson-pmf',title:'泊松 PMF',domain:'probability',level:2,tex:'P(k)=\\frac{\\lambda^k e^{-\\lambda}}{k!}',blurb:'k 次事件的概率（罕见事件极限）。',surface:'canvas2d'},
  params:[n('lambda','λ',3,0.5,15,0.05)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const lam=p.lambda as number; const K=Math.min(40, Math.ceil(lam*3+5));
    const probs:number[]=[]; for(let k=0;k<=K;k++) probs.push(Math.pow(lam,k)*Math.exp(-lam)/fact(k));
    const max=Math.max(...probs);
    const pad=24, w=width-pad*2, h=height-pad*2; const bw=w/(K+1);
    for(let k=0;k<=K;k++){const bh=probs[k]/max*h; ctx.fillStyle='#39bae6'; ctx.fillRect(pad+k*bw, pad+h-bh, bw-1, bh);}
  },
} satisfies Formula;
