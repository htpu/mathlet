import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'correlogram',title:'自相关函数',domain:'signals',level:3,tex:'R_{xx}(\\tau)=\\sum x(t)x(t+\\tau)',blurb:'周期信号的自相关同周期。'},
  params:[n('f','频率',5,0.5,15,0.1),n('noise','噪声',0.3,0,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=400, M=200;
    const x=new Float64Array(N); for(let i=0;i<N;i++) x[i]=Math.sin(2*Math.PI*(p.f as number)*i/N)+(Math.random()-0.5)*(p.noise as number)*2;
    const R=new Float64Array(M);
    for(let tau=0;tau<M;tau++){let s=0; for(let i=0;i<N-tau;i++) s+=x[i]*x[i+tau]; R[tau]=s;}
    let max=R[0];
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let i=0;i<M;i++){const px=i/M*width, py=height/2-R[i]/max*height/2.2;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
