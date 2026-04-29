import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=400;
let u:Float32Array; let last='';
export default {
  meta:{slug:'transport-equation',title:'输运方程（变速）',domain:'pde',level:4,tex:'u_t+c(x)u_x=0',blurb:'速度依空间变化的平流。',surface:'canvas2d',animated:true},
  params:[n('amp','速度幅度',0.5,0,1.5,0.005),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); for(let i=0;i<N;i++){const x=i/N-0.2; u[i]=Math.exp(-x*x*200);} last=sig;}
    const dt=0.001, dx=1/N;
    const a=p.amp as number;
    for(let k=0;k<5;k++){const next=new Float32Array(N);
      for(let i=0;i<N;i++){const c=a*(0.5+Math.cos(2*Math.PI*i/N)); const ip=(i+1)%N, im=(i-1+N)%N;
        if(c>=0) next[i]=u[i]-c*dt/dx*(u[i]-u[im]);
        else next[i]=u[i]-c*dt/dx*(u[ip]-u[i]);}
      u=next;}
    const v={cx:0.5,cy:0.5,scale:Math.min(s.width,s.height)/2.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
