import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
let u:Float32Array; let last=''; const N=400;
export default {
  meta:{slug:'advection',title:'平流方程',domain:'pde',level:4,tex:'u_t+c u_x=0',blurb:'初值波形以速度 c 平移（迎风差分）。',surface:'canvas2d',animated:true},
  params:[n('c','速度 c',0.3,-1,1,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); for(let i=0;i<N;i++){const x=i/N-0.3; u[i]=Math.exp(-x*x*120);} last=sig;}
    const c=p.c as number; const dt=0.0008, dx=1/N; const r=c*dt/dx;
    for(let k=0;k<5;k++){
      const next=new Float32Array(N);
      for(let i=0;i<N;i++){const im=(i-1+N)%N, ip=(i+1)%N;
        if(c>=0) next[i]=u[i]-r*(u[i]-u[im]); else next[i]=u[i]-r*(u[ip]-u[i]);
      }
      u=next;
    }
    const v={cx:0.5,cy:0.3,scale:Math.min(s.width,s.height)/2.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#c2d94c'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
