import type { Formula } from '../types';
import { i, n } from '../types';
import { clear } from '../../render/canvas2d';
function binom(n:number,k:number){let r=1; for(let i=1;i<=k;i++){r=r*(n-i+1)/i;} return r;}
export default {
  meta:{slug:'binomial-dist',title:'二项分布',domain:'probability',level:2,tex:'P(k)=\\binom{n}{k}p^k(1-p)^{n-k}',blurb:'n 次试验 k 次成功的概率。',surface:'canvas2d'},
  params:[i('n','n',20,1,100),n('p','p',0.4,0,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const n=p.n as number, pp=p.p as number;
    const probs:number[]=[]; for(let k=0;k<=n;k++) probs.push(binom(n,k)*Math.pow(pp,k)*Math.pow(1-pp,n-k));
    const max=Math.max(...probs);
    const padX=30, padY=24, w=width-padX*2, h=height-padY*2;
    const bw=w/(n+1);
    for(let k=0;k<=n;k++){const bh=probs[k]/max*h; ctx.fillStyle='#39bae6'; ctx.fillRect(padX+k*bw, padY+h-bh, bw-1, bh);}
  },
} satisfies Formula;
