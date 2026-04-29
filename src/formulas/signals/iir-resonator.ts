import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'iir-resonator',title:'IIR 共振器频响',domain:'signals',level:4,tex:'H(z)=\\frac{1}{1-2r\\cos\\theta z^{-1}+r^2 z^{-2}}',blurb:'极点接近单位圆 → 尖峰共振。'},
  params:[n('r','极点半径 r',0.95,0.5,0.999,0.001),n('theta','极点角 θ',1,0,Math.PI,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const r=p.r as number, th=p.theta as number;
    const N=400;
    const mags:number[]=[];
    for(let i=0;i<N;i++){const w=Math.PI*i/N;
      // |H(e^jw)|^2 = 1/((1-r e^{j(w-θ)})(1-r e^{-j(w-θ)})(1-r e^{j(w+θ)})(1-r e^{-j(w+θ)}))^{1/2}
      const den=(1+r*r-2*r*Math.cos(w-th))*(1+r*r-2*r*Math.cos(w+th));
      mags.push(1/Math.sqrt(Math.max(1e-9,den)));
    }
    const max=Math.max(...mags);
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N*width; const y=height*0.95-mags[i]/max*height*0.85;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
  },
} satisfies Formula;
