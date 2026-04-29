import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'line-search',title:'回溯线搜索（Armijo）',domain:'optimization',level:3,tex:'f(x+\\alpha p)\\le f(x)+c\\alpha\\nabla f^T p',blurb:'判断步长 α 是否充分下降。'},
  params:[n('alpha0','α₀',1,0.05,2,0.01),n('rho','ρ',0.5,0.1,0.9,0.01),n('c','c',0.1,0.01,0.5,0.01)],
  render(s,pa){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.7,cy:1.5,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>(x-1)**2+0.3;
    const fp=(x:number)=>2*(x-1);
    plotFn(s,v,f,'#39bae6');
    const x0=-0.3, p0=-fp(x0); // descent direction
    const c=pa.c as number;
    // Armijo line
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath();
    for(let a=-1;a<3;a+=0.02){const x=x0+a*p0; const armijo=f(x0)+c*a*fp(x0)*p0; s.ctx.lineTo(x,armijo);}
    s.ctx.stroke();
    let alpha=pa.alpha0 as number;
    fillCircle(s,v,x0,f(x0),5,'#f07178');
    while(alpha>1e-4){const x=x0+alpha*p0;
      const acc=f(x)<=f(x0)+c*alpha*fp(x0)*p0;
      fillCircle(s,v,x,f(x),4,acc?'#c2d94c':'#ffb454');
      if(acc) break;
      alpha*=pa.rho as number;
    }
  },
} satisfies Formula;
