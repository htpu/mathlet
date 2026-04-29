import type { Formula } from '../types';
import { s as sel } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta: { slug:'conformal-square', title:'共形映射 z²/sin/exp', domain:'algebra', level:4, tex:'w=f(z)', blurb:'方格在不同复函数下保角变换。', surface:'canvas2d' },
  params: [sel('fn','映射','sq',[{value:'sq',label:'z²'},{value:'sin',label:'sin z'},{value:'exp',label:'e^z'},{value:'inv',label:'1/z'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=p.fn as string;
    const map=(x:number,y:number):[number,number]=>{
      if(f==='sq') return [x*x-y*y, 2*x*y];
      if(f==='sin') return [Math.sin(x)*Math.cosh(y), Math.cos(x)*Math.sinh(y)];
      if(f==='exp') return [Math.exp(x)*Math.cos(y), Math.exp(x)*Math.sin(y)];
      const d=x*x+y*y; return [x/d,-y/d];
    };
    s.ctx.lineWidth=1/v.scale;
    for(let k=-2;k<=2;k+=0.5){
      s.ctx.strokeStyle=`hsl(${(k+2)*40},70%,55%)`;
      s.ctx.beginPath();
      for(let t=-2;t<=2;t+=0.04){const [x,y]=map(k,t); if(t===-2) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
      s.ctx.stroke();
      s.ctx.strokeStyle=`hsl(${(k+2)*40+180},60%,50%)`;
      s.ctx.beginPath();
      for(let t=-2;t<=2;t+=0.04){const [x,y]=map(t,k); if(t===-2) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
      s.ctx.stroke();
    }
  },
} satisfies Formula;
