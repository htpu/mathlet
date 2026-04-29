import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, text } from '../../render/canvas2d';
export default {
  meta:{slug:'divergence-theorem',title:'散度定理（2D 版）',domain:'calculus',level:5,tex:'\\oint F\\cdot n\\,ds=\\iint\\nabla\\cdot F\\,dA',blurb:'通过边界的通量 = 内部散度积分。'},
  params:[n('R','圆半径',1,0.3,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const R=p.R as number;
    plotParam(s,v,t=>[R*Math.cos(t),R*Math.sin(t)],0,Math.PI*2,'#ffb454');
    // F = (x, y), div F = 2, flux through circle = 2 * πR²
    let flux=0; const N=1000; for(let i=0;i<N;i++){const t=2*Math.PI*i/N; const x=R*Math.cos(t), y=R*Math.sin(t); flux+=(x*Math.cos(t)+y*Math.sin(t))*R*(2*Math.PI/N);}
    const intDiv=2*Math.PI*R*R;
    text(s,12,12,`F=(x,y), ∇·F=2`,'#cbccc6',12);
    text(s,12,30,`∮ F·n ds ≈ ${flux.toFixed(4)}`,'#ffb454',12);
    text(s,12,48,`∬ ∇·F dA = 2πR² = ${intDiv.toFixed(4)}`,'#39bae6',12);
  },
} satisfies Formula;
