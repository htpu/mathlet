import type { Formula } from '../types';
import { n, s as sel } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
let psiR:Float32Array, psiI:Float32Array; let last=''; const N=400;
export default {
  meta:{slug:'schrodinger-1d',title:'1D 薛定谔方程（高斯波包）',domain:'pde',level:5,tex:'i\\hbar\\partial_t\\psi=-\\frac{\\hbar^2}{2m}\\partial_x^2\\psi+V\\psi',blurb:'波包碰势垒：透射 + 反射。',surface:'canvas2d',animated:true},
  params:[n('k','动量 k',30,5,80,0.5),n('V0','势垒高度',1500,0,5000,5),sel('V','势','barrier',[{value:'barrier',label:'方势垒'},{value:'free',label:'自由'},{value:'well',label:'方阱'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.k}`;
    if(!psiR||last!==sig){psiR=new Float32Array(N); psiI=new Float32Array(N);
      const k=p.k as number;
      for(let i=0;i<N;i++){const x=i/N-0.3; const env=Math.exp(-x*x*250); psiR[i]=env*Math.cos(k*x); psiI[i]=env*Math.sin(k*x);}
      last=sig;
    }
    const V0=p.V0 as number;
    const V=(i:number)=>{const x=i/N; if(p.V==='barrier') return (x>0.55&&x<0.6)?V0:0; if(p.V==='well') return (x>0.55&&x<0.6)?-V0:0; return 0;};
    const dt=0.0001;
    for(let k=0;k<8;k++){
      const newR=new Float32Array(N), newI=new Float32Array(N);
      for(let i=1;i<N-1;i++){
        const lapR=psiR[i+1]-2*psiR[i]+psiR[i-1];
        const lapI=psiI[i+1]-2*psiI[i]+psiI[i-1];
        newR[i]=psiR[i]+dt*(-0.5*lapI*N*N+V(i)*psiI[i]);
        newI[i]=psiI[i]-dt*(-0.5*lapR*N*N+V(i)*psiR[i]);
      }
      psiR=newR; psiI=newI;
    }
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/2.2};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    plotFn(s,v,x=>{const i=Math.floor(x*N); if(i<0||i>=N) return 0; return V(i)/V0*0.6;},'#2d3340');
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N; if(i===0) s.ctx.moveTo(x,psiR[i]*0.8); else s.ctx.lineTo(x,psiR[i]*0.8);} s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, p2=psiR[i]*psiR[i]+psiI[i]*psiI[i]; if(i===0) s.ctx.moveTo(x,p2*1.5); else s.ctx.lineTo(x,p2*1.5);} s.ctx.stroke();
  },
} satisfies Formula;
