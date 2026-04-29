import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta: { slug:'cardano', title:'三次方程根（Cardano）', domain:'algebra', level:3, tex:'x^3+px+q=0', blurb:'判别式 Δ=-4p³-27q² 决定根的类型。', surface:'canvas2d' },
  params: [n('p','p',-3,-5,5,0.05), n('q','q',1,-5,5,0.05)],
  render(s,pa){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/12};
    clear(s); setupView(s,v); drawAxes(s,v);
    const p=pa.p as number, q=pa.q as number;
    plotFn(s,v,x=>x*x*x+p*x+q,'#ffb454');
    // numerical roots via secant iteration
    const f=(x:number)=>x*x*x+p*x+q;
    for(let x0=-5;x0<=5;x0+=0.5){
      let x=x0, y=f(x);
      for(let it=0;it<40;it++){const dx=Math.max(1e-7,Math.abs(x)*1e-4); const fp=(f(x+dx)-y)/dx; if(Math.abs(fp)<1e-9) break; const nx=x-y/fp; if(!isFinite(nx)) break; x=nx; y=f(x); if(Math.abs(y)<1e-7) break;}
      if(Math.abs(y)<1e-3 && Math.abs(x)<6) fillCircle(s,v,x,0,5,'#f07178');
    }
  },
} satisfies Formula;
