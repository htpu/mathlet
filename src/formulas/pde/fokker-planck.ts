import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=300;
let p_:Float32Array; let last='';
export default {
  meta:{slug:'fokker-planck',title:'Fokker-Planck（OU 过程）',domain:'pde',level:5,tex:'p_t=\\partial_x(\\theta x p)+D\\,p_{xx}',blurb:'OU 过程概率密度演化趋于高斯稳态。',surface:'canvas2d',animated:true},
  params:[n('theta','θ',1,0.1,3,0.01),n('D','D',0.5,0.1,2,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!p_||last!==sig){p_=new Float32Array(N); for(let i=0;i<N;i++){const x=(i/N-0.7)*8; p_[i]=Math.exp(-x*x*5);} last=sig;}
    const D=p.D as number, theta=p.theta as number, dt=0.001, dx=8/N;
    for(let k=0;k<5;k++){const next=new Float32Array(N);
      for(let i=1;i<N-1;i++){const x=(i/N-0.5)*8;
        const drift=theta*((x+dx)*p_[i+1]-(x-dx)*p_[i-1])/(2*dx);
        const diff=D*(p_[i+1]-2*p_[i]+p_[i-1])/(dx*dx);
        next[i]=p_[i]+dt*(drift+diff);}
      p_=next;
    }
    const v={cx:0,cy:0.5,scale:Math.min(s.width/8, s.height/2)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=(i/N-0.5)*8, y=p_[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
