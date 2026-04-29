import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'notch-filter',title:'陷波滤波器频响',domain:'signals',level:3,tex:'H(z)=\\frac{(z-e^{j\\omega_0})(z-e^{-j\\omega_0})}{(z-re^{j\\omega_0})(z-re^{-j\\omega_0})}',blurb:'去除特定频率分量。'},
  params:[n('f0','陷波频率',0.2,0.01,0.5,0.001),n('r','极点半径',0.95,0.5,0.999,0.001)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const w0=2*Math.PI*(p.f0 as number), r=p.r as number;
    const N=300;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<N;i++){const w=Math.PI*i/N;
      const num=Math.sqrt((1+1-2*Math.cos(w-w0))*(1+1-2*Math.cos(w+w0)));
      const den=Math.sqrt((1+r*r-2*r*Math.cos(w-w0))*(1+r*r-2*r*Math.cos(w+w0)));
      const m=num/den;
      const px=i/N*width, py=height*0.95-Math.min(2,m)*height*0.4;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
