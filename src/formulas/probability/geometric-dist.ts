import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'geometric-dist',title:'几何分布',domain:'probability',level:2,tex:'P(k)=(1-p)^{k-1}p',blurb:'首次成功所需试验次数。'},
  params:[n('p','p',0.3,0.01,0.99,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const pp=p.p as number; const K=Math.min(40, Math.ceil(5/pp));
    const probs:number[]=[]; for(let k=1;k<=K;k++) probs.push(Math.pow(1-pp,k-1)*pp);
    const max=Math.max(...probs);
    const pad=24, w=width-pad*2, h=height-pad*2; const bw=w/K;
    for(let k=0;k<K;k++){const bh=probs[k]/max*h; ctx.fillStyle='#ffb454'; ctx.fillRect(pad+k*bw, pad+h-bh, bw-1, bh);}
  },
} satisfies Formula;
