import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, text } from '../../render/canvas2d';
export default {
  meta:{slug:'determinant-area',title:'行列式 = 面积',domain:'linalg',level:3,tex:'\\det A=ad-bc',blurb:'两列向量张成平行四边形的有向面积 = 行列式。',surface:'canvas2d'},
  params:[n('a','a',1.5,-3,3,0.01),n('b','b',0.5,-3,3,0.01),n('c','c',0.3,-3,3,0.01),n('d','d',1.2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const {a,b,c,d}=p as any;
    const det=a*d-b*c;
    s.ctx.fillStyle=det>=0?'rgba(255,180,84,0.4)':'rgba(240,113,120,0.4)';
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a,c); s.ctx.lineTo(a+b,c+d); s.ctx.lineTo(b,d); s.ctx.closePath(); s.ctx.fill();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a,c); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c';
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(b,d); s.ctx.stroke();
    text(s,12,12,`det = ${det.toFixed(3)}`,det>=0?'#ffb454':'#f07178',14);
  },
} satisfies Formula;
