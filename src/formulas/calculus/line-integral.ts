import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, text } from '../../render/canvas2d';
export default {
  meta:{slug:'line-integral',title:'线积分（沿曲线）',domain:'calculus',level:4,tex:'\\int_C f\\,ds',blurb:'圆周路径上 f=x²+y² 的线积分。'},
  params:[n('R','半径',1,0.3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const R=p.R as number;
    plotParam(s,v,t=>[R*Math.cos(t),R*Math.sin(t)],0,Math.PI*2,'#ffb454');
    let I=0; const N=2000; const ds=2*Math.PI*R/N;
    for(let i=0;i<N;i++){const t=2*Math.PI*i/N; const x=R*Math.cos(t), y=R*Math.sin(t); I+=(x*x+y*y)*ds;}
    text(s,12,12,`∮ f ds ≈ ${I.toFixed(4)} (= 2πR³ = ${(2*Math.PI*R**3).toFixed(4)})`,'#cbccc6',12);
  },
} satisfies Formula;
