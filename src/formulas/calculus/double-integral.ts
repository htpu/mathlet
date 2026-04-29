import type { Formula } from '../types';
import { n } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'double-integral',title:'二重积分（黎曼柱）',domain:'calculus',level:3,tex:'\\iint_R f(x,y)dA',blurb:'矩形区域上 f=x²+y² 的二重积分数值估计。',surface:'canvas2d'},
  params:[n('a','x 起',-1,-3,0,0.01),n('b','x 止',1,0,3,0.01),n('c','y 起',-1,-3,0,0.01),n('d','y 止',1,0,3,0.01),n('N','分段',20,5,80,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const a=p.a as number, b=p.b as number, c=p.c as number, d=p.d as number, N=p.N as number;
    const dx=(b-a)/N, dy=(d-c)/N;
    let I=0;
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){const x=a+(i+0.5)*dx, y=c+(j+0.5)*dy; I+=(x*x+y*y)*dx*dy;}
    const cw=Math.min(width,height)/(N+2);
    const ox=width/2-N*cw/2, oy=height/2-N*cw/2;
    let max=0; for(let i=0;i<N;i++) for(let j=0;j<N;j++){const x=a+(i+0.5)*dx, y=c+(j+0.5)*dy; const v=x*x+y*y; if(v>max) max=v;}
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){const x=a+(i+0.5)*dx, y=c+(j+0.5)*dy; const v=(x*x+y*y)/max;
      ctx.fillStyle=`hsl(${30+v*60},70%,${35+v*30}%)`;
      ctx.fillRect(ox+i*cw, oy+j*cw, cw-0.5, cw-0.5);}
    text(s,12,12,`∬ ≈ ${I.toFixed(4)}`,'#ffb454',14);
  },
} satisfies Formula;
