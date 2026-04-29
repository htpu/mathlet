import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
let u:Float32Array; let lastSig=''; const N=300;
export default {
  meta:{slug:'heat-1d',title:'1D 热传导',domain:'pde',level:3,tex:'u_t=\\alpha u_{xx}',blurb:'两端冷源，中部高斯热源逐渐扩散平滑。',surface:'canvas2d',animated:true},
  params:[n('alpha','扩散系数',0.4,0.01,1,0.005),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    if(!u){u=new Float32Array(N);} 
    const sig=`${p.reset}`;
    if(lastSig!==sig){u=new Float32Array(N); for(let i=0;i<N;i++){const x=i/N-0.5; u[i]=Math.exp(-x*x*120);} lastSig=sig;}
    const a=p.alpha as number; const dt=0.001, dx=1/N; const r=a*dt/(dx*dx);
    for(let k=0;k<5;k++){const next=new Float32Array(N); for(let i=1;i<N-1;i++) next[i]=u[i]+r*(u[i+1]-2*u[i]+u[i-1]); u=next;}
    const v={cx:0.5,cy:0.3,scale:Math.min(s.width,s.height)/2.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ff5050'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
