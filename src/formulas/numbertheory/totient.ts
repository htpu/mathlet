import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'totient',title:'欧拉函数 φ(n)',domain:'numbertheory',level:3,tex:'\\varphi(n)=\\#\\{k\\le n:\\gcd(k,n)=1\\}',blurb:'与 n 互素的 ≤n 数个数。',surface:'canvas2d'},
  params:[i('N','N',150,30,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const padX=24, padY=24, w=width-padX*2, h=height-padY*2;
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5;
    ctx.beginPath();
    for(let n=2;n<=N;n++){let phi=0; for(let k=1;k<=n;k++) if(gcd(k,n)===1) phi++;
      const x=padX+(n-2)/(N-2)*w; const y=padY+h-phi/N*h;
      if(n===2) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
  },
} satisfies Formula;
