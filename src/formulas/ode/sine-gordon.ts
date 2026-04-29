import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=300;
let u:Float32Array, up:Float32Array; let last='';
export default {
  meta:{slug:'sine-gordon',title:'Sine-Gordon 方程',domain:'ode',level:5,tex:'u_{tt}-u_{xx}+\\sin u=0',blurb:'非线性波；孤子解（kink）。',surface:'canvas2d',animated:true},
  params:[n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); up=new Float32Array(N);
      for(let i=0;i<N;i++){const x=(i/N-0.4)*8; u[i]=4*Math.atan(Math.exp(x*0.8)); up[i]=u[i];}
      last=sig;
    }
    const dt=0.02, dx=10/N;
    const r2=(dt/dx)*(dt/dx);
    const next=new Float32Array(N);
    for(let i=1;i<N-1;i++) next[i]=2*u[i]-up[i]+r2*(u[i+1]-2*u[i]+u[i-1])-dt*dt*Math.sin(u[i]);
    next[0]=next[1]; next[N-1]=next[N-2];
    up=u; u=next;
    const v={cx:0.5,cy:Math.PI,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
