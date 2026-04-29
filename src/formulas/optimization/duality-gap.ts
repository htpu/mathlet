import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, text } from '../../render/canvas2d';
export default {
  meta:{slug:'duality-gap',title:'弱对偶 / 强对偶',domain:'optimization',level:4,tex:'d^*\\le p^*',blurb:'凸优化下 gap = 0 (Slater)。'},
  params:[n('lambda','λ',1,0,5,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x;
    const g=(x:number)=>x-1;
    const lag=(x:number)=>f(x)+(p.lambda as number)*g(x);
    plotFn(s,v,f,'#39bae6');
    plotFn(s,v,lag,'#ffb454');
    plotFn(s,v,()=>1,'#2d3340');
    const xstar=-(p.lambda as number)/2;
    const dual=lag(xstar);
    text(s,12,12,`λ=${p.lambda} → x*=${xstar.toFixed(2)}, dual=${dual.toFixed(3)}`,'#ffb454',12);
    text(s,12,30,`primal min (constrained x≥1) = 1`,'#39bae6',12);
  },
} satisfies Formula;
