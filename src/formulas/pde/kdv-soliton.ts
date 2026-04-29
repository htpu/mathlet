import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=400;
let u:Float32Array; let last='';
export default {
  meta:{slug:'kdv-soliton',title:'KdV 方程（孤立波）',domain:'pde',level:5,tex:'u_t+6uu_x+u_{xxx}=0',blurb:'sech² 形孤立波。',surface:'canvas2d',animated:true},
  params:[n('A','幅度',1,0.3,3,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.A}|${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); const A=p.A as number;
      for(let i=0;i<N;i++){const x=(i/N-0.3)*20; u[i]=A/Math.cosh(Math.sqrt(A/2)*x)**2;}
      last=sig;
    }
    const dt=0.0001, dx=20/N;
    for(let k=0;k<5;k++){const next=new Float32Array(N);
      for(let i=2;i<N-2;i++){const ux=(u[i+1]-u[i-1])/(2*dx); const uxxx=(u[i+2]-2*u[i+1]+2*u[i-1]-u[i-2])/(2*dx*dx*dx);
        next[i]=u[i]-dt*(6*u[i]*ux+uxxx);}
      u=next;
    }
    const v={cx:0.5,cy:1,scale:Math.min(s.width,s.height)/3};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
