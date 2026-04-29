import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'complex-conjugate',title:'复数共轭与模',domain:'algebra',level:1,tex:'\\bar z=a-bi,|z|=\\sqrt{a^2+b^2}',blurb:'共轭 = 实轴对称；模 = 到原点距离。',surface:'canvas2d'},
  params:[n('a','a',1.5,-3,3,0.01),n('b','b',2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, b=p.b as number, m=Math.hypot(a,b);
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,m,0,Math.PI*2); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a,b); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a,-b); s.ctx.stroke();
    fillCircle(s,v,a,b,5,'#ffb454');
    fillCircle(s,v,a,-b,5,'#c2d94c');
  },
} satisfies Formula;
