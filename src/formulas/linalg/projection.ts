import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'projection',title:'向量投影',domain:'linalg',level:2,tex:'\\text{proj}_b a=\\frac{a\\cdot b}{|b|^2}b',blurb:'a 在 b 方向上的投影向量。',surface:'canvas2d'},
  params:[n('ax','a.x',2,-3,3,0.01),n('ay','a.y',1.5,-3,3,0.01),n('bx','b.x',2.5,-3,3,0.01),n('by','b.y',0.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const ax=p.ax as number, ay=p.ay as number, bx=p.bx as number, by=p.by as number;
    const dot=ax*bx+ay*by, b2=bx*bx+by*by;
    const px=dot/b2*bx, py=dot/b2*by;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(ax,ay); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(bx*1.5,by*1.5); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2.5/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(px,py); s.ctx.stroke();
    s.ctx.strokeStyle='#2d3340'; s.ctx.setLineDash([0.05,0.05]);
    s.ctx.beginPath(); s.ctx.moveTo(ax,ay); s.ctx.lineTo(px,py); s.ctx.stroke(); s.ctx.setLineDash([]);
  },
} satisfies Formula;
