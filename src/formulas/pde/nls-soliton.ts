import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=400;
let psi_r:Float32Array, psi_i:Float32Array; let last='';
export default {
  meta:{slug:'nls-soliton',title:'非线性薛定谔（孤子）',domain:'pde',level:5,tex:'i\\psi_t+\\frac{1}{2}\\psi_{xx}+|\\psi|^2\\psi=0',blurb:'sech 包络保形传播 = 孤子。',surface:'canvas2d',animated:true},
  params:[n('A','幅度',1,0.3,3,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.A}|${p.reset}`;
    if(!psi_r||last!==sig){psi_r=new Float32Array(N); psi_i=new Float32Array(N); const A=p.A as number;
      for(let i=0;i<N;i++){const x=(i/N-0.5)*30; const e=A/Math.cosh(A*x); psi_r[i]=e; psi_i[i]=0;}
      last=sig;
    }
    const dt=0.0008, dx=30/N;
    for(let k=0;k<3;k++){const nr=new Float32Array(N), ni=new Float32Array(N);
      for(let i=1;i<N-1;i++){const lapR=(psi_r[i+1]-2*psi_r[i]+psi_r[i-1])/(dx*dx); const lapI=(psi_i[i+1]-2*psi_i[i]+psi_i[i-1])/(dx*dx); const m2=psi_r[i]**2+psi_i[i]**2;
        nr[i]=psi_r[i]+dt*(-0.5*lapI-m2*psi_i[i]); ni[i]=psi_i[i]+dt*(0.5*lapR+m2*psi_r[i]);}
      psi_r=nr; psi_i=ni;
    }
    const v={cx:0.5,cy:0.7,scale:Math.min(s.width,s.height)/2.5};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, m2=psi_r[i]**2+psi_i[i]**2; if(i===0) s.ctx.moveTo(x,m2); else s.ctx.lineTo(x,m2);}
    s.ctx.stroke();
  },
} satisfies Formula;
