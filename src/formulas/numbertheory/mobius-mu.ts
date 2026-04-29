import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
function mu(n:number){if(n===1) return 1; let count=0; let nn=n;
  for(let p=2;p*p<=nn;p++){if(nn%p===0){if(nn%(p*p)===0) return 0; count++; nn/=p;}}
  if(nn>1) count++;
  return count%2===0?1:-1;}
export default {
  meta:{slug:'mobius-mu',title:'Möbius μ 函数',domain:'numbertheory',level:3,tex:'\\mu(n)\\in\\{-1,0,1\\}',blurb:'平方因子 → 0；偶素因子 → 1；奇素因子 → -1。'},
  params:[i('N','N',100,10,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const padX=24, padY=24, w=width-padX*2, h=height-padY*2;
    const bw=w/N;
    for(let n=1;n<=N;n++){const m=mu(n); const y=h/2-m*h*0.4;
      ctx.fillStyle=m>0?'#ffb454':m<0?'#39bae6':'#2d3340';
      ctx.fillRect(padX+(n-1)*bw, padY+(m>0?y:h/2), bw-0.5, Math.abs(m)*h*0.4||3);}
  },
} satisfies Formula;
