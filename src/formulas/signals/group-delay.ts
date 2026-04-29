import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'group-delay',title:'群延迟（FIR 滤波器）',domain:'signals',level:4,tex:'\\tau_g=-d\\angle H/d\\omega',blurb:'线性相位滤波器的群延迟为常数。'},
  params:[n('a1','b₀',0.25,0,1,0.005),n('a2','b₁',0.5,0,1,0.005),n('a3','b₂',0.25,0,1,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const b=[p.a1,p.a2,p.a3] as number[];
    const N=400;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<N;i++){const w=Math.PI*i/N;
      let R=0, I=0; for(let n=0;n<3;n++){R+=b[n]*Math.cos(-w*n); I+=b[n]*Math.sin(-w*n);}
      const m=Math.sqrt(R*R+I*I); const px=i/N*width, py=height/2-m*height/4;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
    ctx.strokeStyle='#39bae6'; ctx.beginPath();
    for(let i=0;i<N;i++){const w=Math.PI*i/N;
      let R=0, I=0; for(let n=0;n<3;n++){R+=b[n]*Math.cos(-w*n); I+=b[n]*Math.sin(-w*n);}
      const ph=Math.atan2(I,R); const px=i/N*width, py=height*3/4-ph*height/8;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
