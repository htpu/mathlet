import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'centroid-triangle',title:'三角形重心',domain:'geometry',level:1,tex:'G=(A+B+C)/3',blurb:'三条中线的交点 = 重心。',surface:'canvas2d'},
  params:[n('Ax','Ax',-2,-3,3,0.01),n('Ay','Ay',-1,-3,3,0.01),n('Bx','Bx',2,-3,3,0.01),n('By','By',-1,-3,3,0.01),n('Cx','Cx',0,-3,3,0.01),n('Cy','Cy',2.2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const A=[p.Ax,p.Ay] as number[], B=[p.Bx,p.By] as number[], C=[p.Cx,p.Cy] as number[];
    const G=[(A[0]+B[0]+C[0])/3, (A[1]+B[1]+C[1])/3];
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(A[0],A[1]); s.ctx.lineTo(B[0],B[1]); s.ctx.lineTo(C[0],C[1]); s.ctx.closePath(); s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    const mids=[[(B[0]+C[0])/2,(B[1]+C[1])/2],[(A[0]+C[0])/2,(A[1]+C[1])/2],[(A[0]+B[0])/2,(A[1]+B[1])/2]];
    s.ctx.beginPath(); s.ctx.moveTo(A[0],A[1]); s.ctx.lineTo(mids[0][0],mids[0][1]);
    s.ctx.moveTo(B[0],B[1]); s.ctx.lineTo(mids[1][0],mids[1][1]);
    s.ctx.moveTo(C[0],C[1]); s.ctx.lineTo(mids[2][0],mids[2][1]);
    s.ctx.stroke();
    fillCircle(s,v,G[0],G[1],5,'#f07178');
  },
} satisfies Formula;
