import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { rk4, mulberry32 } from '../../render/numerics';
let phases:number[]=[]; let omegas:number[]=[]; let last='';
export default {
  meta:{slug:'kuramoto',title:'Kuramoto 同步',domain:'ode',level:4,tex:'\\dot\\theta_i=\\omega_i+\\frac{K}{N}\\sum\\sin(\\theta_j-\\theta_i)',blurb:'N 个振子在耦合 K 下的同步相变。',surface:'canvas2d',animated:true},
  params:[i('N','N',30,5,100),n('K','耦合 K',1,0,5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.N}`;
    if(last!==sig){const r=mulberry32(7); const N=p.N as number;
      phases=[]; omegas=[];
      for(let i=0;i<N;i++){phases.push(r()*Math.PI*2); omegas.push((r()-0.5)*2);}
      last=sig;
    }
    const N=phases.length, K=p.K as number, dt=0.05;
    const next=phases.map((th,i)=>{let s=0; for(const tj of phases) s+=Math.sin(tj-th); return th+dt*(omegas[i]+K/N*s);});
    phases=next;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/3};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
    for(let i=0;i<N;i++) fillCircle(s,v,Math.cos(phases[i]),Math.sin(phases[i]),4,`hsl(${i*360/N},70%,55%)`);
    // order parameter
    let cx=0, cy=0; for(const ph of phases){cx+=Math.cos(ph); cy+=Math.sin(ph);} cx/=N; cy/=N;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(cx,cy); s.ctx.stroke();
  },
} satisfies Formula;
