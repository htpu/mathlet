import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
const N=200;
let u:Float32Array, up:Float32Array; let last='';
export default {
  meta:{slug:'string-pluck',title:'琴弦拨动',domain:'pde',level:3,tex:'\\text{triangular initial }+u_{tt}=c^2u_{xx}',blurb:'拨动点初始三角形，分裂为两半反向行波。',surface:'canvas2d',animated:true},
  params:[n('pluck','拨动位置',0.3,0.05,0.95,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.pluck}|${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N); up=new Float32Array(N);
      const px=(p.pluck as number)*N|0;
      for(let i=0;i<N;i++) u[i]=i<px?i/px:(N-1-i)/(N-1-px);
      for(let i=0;i<N;i++) up[i]=u[i]; last=sig;
    }
    const r2=0.16;
    for(let k=0;k<3;k++){const next=new Float32Array(N);
      for(let i=1;i<N-1;i++) next[i]=2*u[i]-up[i]+r2*(u[i+1]-2*u[i]+u[i-1]);
      next[0]=0; next[N-1]=0;
      up=u; u=next;
    }
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/2.4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let i=0;i<N;i++){const x=i/N, y=u[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
