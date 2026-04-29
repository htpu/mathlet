import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, text } from '../../render/canvas2d';
export default {
  meta:{slug:'dot-cross-product',title:'点积 / 叉积（2D）',domain:'linalg',level:1,tex:'a\\cdot b=|a||b|\\cos\\theta,a\\times b=|a||b|\\sin\\theta',blurb:'点积 = 投影长，叉积 = 平行四边形面积。',surface:'canvas2d'},
  params:[n('ax','a.x',2,-3,3,0.01),n('ay','a.y',0.5,-3,3,0.01),n('bx','b.x',1,-3,3,0.01),n('by','b.y',1.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const ax=p.ax as number, ay=p.ay as number, bx=p.bx as number, by=p.by as number;
    const dot=ax*bx+ay*by, cross=ax*by-ay*bx;
    s.ctx.fillStyle='rgba(255,180,84,0.2)';
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(ax,ay); s.ctx.lineTo(ax+bx,ay+by); s.ctx.lineTo(bx,by); s.ctx.closePath(); s.ctx.fill();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(ax,ay); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(bx,by); s.ctx.stroke();
    text(s,12,12,`a·b = ${dot.toFixed(3)}`,'#39bae6',13);
    text(s,12,30,`a×b = ${cross.toFixed(3)}`,'#c2d94c',13);
  },
} satisfies Formula;
