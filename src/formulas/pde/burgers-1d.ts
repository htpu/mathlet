import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=400;
let u:Float32Array; let last='';
export default {
  meta:{slug:'burgers-1d',title:'1D Burgers 方程（激波形成）',domain:'pde',level:5,tex:'u_t+uu_x=\\nu u_{xx}',blurb:'非线性平流 + 黏性 → 激波。',surface:'canvas2d',animated:true},
  params:[n('nu','黏性 ν',0.005,0,0.05,0.0005),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); for(let i=0;i<N;i++){const x=i/N-0.3; u[i]=Math.exp(-x*x*120);} last=sig;}
    const nu=p.nu as number, dt=0.0005, dx=1/N;
    for(let k=0;k<5;k++){const next=new Float32Array(N);
      for(let i=1;i<N-1;i++){const adv=u[i]>=0?u[i]*(u[i]-u[i-1])/dx:u[i]*(u[i+1]-u[i])/dx; const diff=nu*(u[i+1]-2*u[i]+u[i-1])/(dx*dx); next[i]=u[i]+dt*(-adv+diff);}
      u=next;
    }
    const v={cx:0.5,cy:0.3,scale:Math.min(s.width,s.height)/2.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#f07178'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
