import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'ellipse-foci',title:'椭圆焦点性质',domain:'geometry',level:2,tex:'r_1+r_2=2a',blurb:'椭圆 = 到两焦点距离之和恒定的轨迹。',surface:'canvas2d'},
  params:[n('a','a',2,0.5,3,0.01),n('b','b',1.4,0.3,3,0.01),n('t','t',1,0,Math.PI*2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, b=p.b as number;
    const c=Math.sqrt(Math.max(0,a*a-b*b));
    plotParam(s,v,t=>[a*Math.cos(t),b*Math.sin(t)],0,Math.PI*2,'#39bae6');
    fillCircle(s,v,c,0,5,'#ffb454'); fillCircle(s,v,-c,0,5,'#ffb454');
    const px=a*Math.cos(p.t as number), py=b*Math.sin(p.t as number);
    fillCircle(s,v,px,py,5,'#f07178');
    s.ctx.strokeStyle='#c2d94c'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(c,0); s.ctx.lineTo(px,py); s.ctx.lineTo(-c,0); s.ctx.stroke();
  },
} satisfies Formula;
