import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'limit-epsilon-delta',title:'ε-δ 极限定义',domain:'calculus',level:3,tex:'\\forall\\epsilon\\exists\\delta:|x-a|<\\delta\\Rightarrow|f(x)-L|<\\epsilon',blurb:'ε 区域内 f 输出，δ 区域内 x 输入。',surface:'canvas2d'},
  params:[n('a','a',1,-2,2,0.01),n('eps','ε',0.4,0.01,1.5,0.01),n('delta','δ',0.3,0.01,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x;
    plotFn(s,v,f,'#39bae6');
    const a=p.a as number, L=f(a);
    s.ctx.fillStyle='rgba(255,180,84,0.2)';
    s.ctx.fillRect(-3, L-(p.eps as number), 6, (p.eps as number)*2);
    s.ctx.fillStyle='rgba(57,186,230,0.2)';
    s.ctx.fillRect(a-(p.delta as number), -3, (p.delta as number)*2, 6);
  },
} satisfies Formula;
