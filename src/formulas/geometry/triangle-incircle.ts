import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, strokeCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'triangle-incircle',title:'三角形内切圆',domain:'geometry',level:2,tex:'r=\\frac{\\text{Area}}{s}',blurb:'内切圆半径 = 面积 / 半周长。',surface:'canvas2d'},
  params:[n('Ax','Ax',-2,-3,3,0.01),n('Ay','Ay',-1,-3,3,0.01),n('Bx','Bx',2,-3,3,0.01),n('By','By',-1,-3,3,0.01),n('Cx','Cx',0,-3,3,0.01),n('Cy','Cy',2.2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const A=[p.Ax,p.Ay] as number[], B=[p.Bx,p.By] as number[], C=[p.Cx,p.Cy] as number[];
    const a=Math.hypot(B[0]-C[0],B[1]-C[1]), b=Math.hypot(C[0]-A[0],C[1]-A[1]), c=Math.hypot(A[0]-B[0],A[1]-B[1]);
    const sm=(a+b+c)/2;
    const ix=(a*A[0]+b*B[0]+c*C[0])/(a+b+c), iy=(a*A[1]+b*B[1]+c*C[1])/(a+b+c);
    const area=Math.abs((B[0]-A[0])*(C[1]-A[1])-(B[1]-A[1])*(C[0]-A[0]))/2;
    const r=area/sm;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(A[0],A[1]); s.ctx.lineTo(B[0],B[1]); s.ctx.lineTo(C[0],C[1]); s.ctx.closePath(); s.ctx.stroke();
    strokeCircle(s,v,ix,iy,r,'#39bae6',1.5);
    fillCircle(s,v,ix,iy,4,'#f07178');
  },
} satisfies Formula;
