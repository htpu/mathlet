import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, plotParam } from '../../render/canvas2d';
export default {
  meta:{slug:'fundamental-algebra',title:'代数基本定理（绕零点）',domain:'algebra',level:4,tex:'\\text{deg}(p)=\\text{winding number}',blurb:'多项式映射大圆，绕 0 点圈数 = 度数。',surface:'canvas2d'},
  params:[i('n','次数',4,1,8)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/12};
    clear(s); setupView(s,v); drawAxes(s,v);
    const n=p.n as number, R=2;
    plotParam(s,v,t=>{let r=1,i=0; const cr=R*Math.cos(t), ci=R*Math.sin(t); for(let k=0;k<n;k++){const tr=r*cr-i*ci; i=r*ci+i*cr; r=tr;} return [r+0.5, i+0.5];},0,Math.PI*2,'#ffb454',2000);
  },
} satisfies Formula;
