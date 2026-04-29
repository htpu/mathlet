import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'newton-1d',title:'牛顿法（求根）',domain:'optimization',level:3,tex:'x_{n+1}=x_n-\\frac{f(x_n)}{f\'(x_n)}',blurb:'切线交 x 轴，迭代逼近根。'},
  params:[n('x0','初值',2,-3,3,0.01),i('steps','步数',6,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x*x-2*x-1;
    const fp=(x:number)=>3*x*x-2;
    plotFn(s,v,f,'#39bae6');
    let x=p.x0 as number;
    for(let i=0;i<(p.steps as number);i++){const y=f(x);
      s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(x,y); s.ctx.lineTo(x,0); s.ctx.stroke();
      const slope=fp(x); if(Math.abs(slope)<1e-9) break;
      const nx=x-y/slope;
      s.ctx.strokeStyle='#f07178'; s.ctx.beginPath(); s.ctx.moveTo(x,y); s.ctx.lineTo(nx,0); s.ctx.stroke();
      fillCircle(s,v,x,y,3,'#ffb454');
      x=nx;
    }
    fillCircle(s,v,x,0,5,'#c2d94c');
  },
} satisfies Formula;
