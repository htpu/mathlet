import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'triangular-numbers',title:'三角数 T_n=n(n+1)/2',domain:'numbertheory',level:1,tex:'T_n=\\binom{n+1}{2}',blurb:'1, 3, 6, 10, ... 几何排成三角形。'},
  params:[i('n','n',8,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const n=p.n as number;
    const r=Math.min(width,height)/(n+2)/2;
    for(let i=1;i<=n;i++) for(let j=0;j<i;j++){const x=width/2+(j-i/2+0.5)*r*2.2; const y=20+i*r*2;
      ctx.fillStyle=`hsl(${30+i*15},70%,55%)`; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fill();}
    ctx.fillStyle='#ffb454'; ctx.font='14px ui-monospace,monospace';
    ctx.fillText(`T_${n} = ${n*(n+1)/2}`, 12, 16);
  },
} satisfies Formula;
