import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'secant-method',title:'割线法',domain:'optimization',level:3,tex:'x_{n+1}=x_n-f(x_n)\\frac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}',blurb:'无需导数版牛顿。'},
  params:[n('x0','x₀',-1,-3,3,0.01),n('x1','x₁',2,-3,3,0.01),i('steps','步数',6,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x*x-2*x-1;
    plotFn(s,v,f,'#39bae6');
    let x0=p.x0 as number, x1=p.x1 as number;
    for(let i=0;i<(p.steps as number);i++){
      const f0=f(x0), f1=f(x1); if(Math.abs(f1-f0)<1e-12) break;
      const x2=x1-f1*(x1-x0)/(f1-f0);
      s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale; s.ctx.beginPath();
      s.ctx.moveTo(x0,f0); s.ctx.lineTo(x2,0); s.ctx.stroke();
      fillCircle(s,v,x2,0,4,'#f07178');
      x0=x1; x1=x2;
    }
  },
} satisfies Formula;
