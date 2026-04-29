import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'fibonacci-spiral',title:'Fibonacci 螺线',domain:'numbertheory',level:2,tex:'\\frac{F_{n+1}}{F_n}\\to\\phi',blurb:'连续 Fibonacci 正方形拼接 → 黄金螺线。'},
  params:[i('n','项数',9,3,15)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const F:number[]=[1,1]; for(let i=2;i<(p.n as number);i++) F.push(F[i-1]+F[i-2]);
    const total=F[F.length-1]+F[F.length-2];
    const sc=Math.min(width,height)*0.85/total;
    let x=width/2-F[F.length-1]*sc/2, y=height/2-F[F.length-1]*sc/2;
    let dir=0;
    ctx.lineWidth=2;
    for(let i=0;i<F.length;i++){const f=F[i];
      ctx.strokeStyle=`hsl(${30+i*20},70%,55%)`;
      ctx.strokeRect(x,y,f*sc,f*sc);
      ctx.beginPath();
      if(dir===0) ctx.arc(x+f*sc, y+f*sc, f*sc, Math.PI, 1.5*Math.PI);
      else if(dir===1) ctx.arc(x, y+f*sc, f*sc, 1.5*Math.PI, Math.PI*2);
      else if(dir===2) ctx.arc(x, y, f*sc, 0, Math.PI/2);
      else ctx.arc(x+f*sc, y, f*sc, Math.PI/2, Math.PI);
      ctx.stroke();
      if(dir===0) x+=f*sc;
      else if(dir===1) y+=f*sc;
      else if(dir===2) x-=f*sc;
      else y-=f*sc;
      dir=(dir+1)%4;
    }
  },
} satisfies Formula;
