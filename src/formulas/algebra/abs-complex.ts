import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'abs-complex',title:'|z| 与 arg z',domain:'algebra',level:2,tex:'|z|=r,\\arg z=\\theta',blurb:'复数的极坐标表示。',surface:'canvas2d'},
  params:[n('a','实部 a',1.5,-3,3,0.01),n('b','虚部 b',2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, b=p.b as number;
    const r=Math.hypot(a,b), th=Math.atan2(b,a);
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.2/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,r,0,Math.PI*2); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a,b); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.beginPath(); s.ctx.arc(0,0,Math.min(r,1)*0.4, 0, th); s.ctx.stroke();
    fillCircle(s,v,a,b,5,'#ffb454');
  },
} satisfies Formula;
