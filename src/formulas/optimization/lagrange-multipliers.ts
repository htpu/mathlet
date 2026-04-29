import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'lagrange-multipliers',title:'拉格朗日乘子',domain:'optimization',level:4,tex:'\\nabla f=\\lambda\\nabla g',blurb:'最大化 f(x,y)=xy 受约束 x²+y²=r²。'},
  params:[n('r','约束半径 r',1,0.3,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/5};
    clear(s); setupView(s,v); drawAxes(s,v);
    // contours of f=xy
    for(let lev of [-1.5,-1,-0.5,0.5,1,1.5,2]){
      s.ctx.strokeStyle=`rgba(57,186,230,${Math.min(1,Math.abs(lev)*0.4)})`; s.ctx.lineWidth=1/v.scale;
      s.ctx.beginPath();
      for(let x=-3;x<=3;x+=0.02){const y=lev/x; if(isFinite(y)&&Math.abs(y)<3){if(x===-3) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}}
      s.ctx.stroke();
    }
    plotParam(s,v,t=>[(p.r as number)*Math.cos(t),(p.r as number)*Math.sin(t)],0,Math.PI*2,'#ffb454');
    const r=p.r as number;
    for(const sign of [[1,1],[-1,-1],[1,-1],[-1,1]]) fillCircle(s,v,sign[0]*r/Math.SQRT2, sign[1]*r/Math.SQRT2, 5, sign[0]*sign[1]>0?'#c2d94c':'#f07178');
  },
} satisfies Formula;
