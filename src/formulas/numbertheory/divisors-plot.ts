import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'divisors-plot',title:'因子计数 d(n)',domain:'numbertheory',level:2,tex:'d(n)=\\#\\{k:k|n\\}',blurb:'素数 d(n)=2，幂多者凸出。',surface:'canvas2d'},
  params:[i('N','N',300,30,2000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const divs=new Array(N+1).fill(0);
    for(let i=1;i<=N;i++) for(let j=i;j<=N;j+=i) divs[j]++;
    let max=Math.max(...divs);
    const padX=20, padY=24, w=width-padX*2, h=height-padY*2;
    for(let n=1;n<=N;n++){const x=padX+(n-1)/N*w; const bh=divs[n]/max*h;
      ctx.fillStyle=divs[n]===2?'#f07178':`hsl(${30+divs[n]*15},70%,55%)`;
      ctx.fillRect(x, padY+h-bh, w/N+0.5, bh);}
  },
} satisfies Formula;
