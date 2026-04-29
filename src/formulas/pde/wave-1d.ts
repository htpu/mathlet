import type { Formula } from '../types';
import { n, b } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
let u:Float32Array, up:Float32Array, un:Float32Array; let lastSig=''; const N=400;
export default {
  meta:{slug:'wave-1d',title:'1D 波动方程',domain:'pde',level:3,tex:'u_{tt}=c^2 u_{xx}',blurb:'两端固定弦，初值高斯包行波。',surface:'canvas2d',animated:true},
  params:[n('c','波速 c',1,0.2,2,0.01),n('damp','阻尼',0.001,0,0.05,0.0005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const c=p.c as number, dt=0.005, dx=1/N;
    const sig=`init`;
    if(!u||lastSig!==sig){u=new Float32Array(N); up=new Float32Array(N); un=new Float32Array(N);
      for(let i=0;i<N;i++){const x=i/N-0.5; u[i]=Math.exp(-x*x*60); up[i]=u[i];}
      lastSig=sig;
    }
    const r2=(c*dt/dx)**2;
    const damp=p.damp as number;
    for(let k=0;k<8;k++){
      for(let i=1;i<N-1;i++){un[i]=2*u[i]-up[i]+r2*(u[i+1]-2*u[i]+u[i-1])-damp*(u[i]-up[i]);}
      un[0]=0; un[N-1]=0;
      const tmp=up; up=u; u=un; un=tmp;
    }
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/3};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
