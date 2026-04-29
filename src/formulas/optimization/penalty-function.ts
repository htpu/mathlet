import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'penalty-function',title:'惩罚函数法',domain:'optimization',level:3,tex:'\\min f(x)+\\mu\\max(0,g(x))^2',blurb:'增大 μ → 趋近约束极小。'},
  params:[n('mu','μ',1,0.01,100,0.01,true)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>(x-2)**2;
    const g=(x:number)=>x-1;
    const F=(x:number)=>f(x)+(p.mu as number)*Math.pow(Math.max(0,g(x)),2);
    plotFn(s,v,f,'#39bae6');
    plotFn(s,v,F,'#ffb454');
  },
} satisfies Formula;
