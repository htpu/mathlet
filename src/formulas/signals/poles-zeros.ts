import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, strokeCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'poles-zeros',title:'极点-零点图（z 平面）',domain:'signals',level:4,tex:'H(z)=\\frac{(z-z_1)(z-z_2)}{(z-p_1)(z-p_2)}',blurb:'圆内极点 → 稳定。',surface:'canvas2d'},
  params:[n('z1','零点 r',0.8,0,2,0.01),n('z2','零点 θ',1.5,-Math.PI,Math.PI,0.01),n('p1','极点 r',0.7,0,0.99,0.01),n('p2','极点 θ',1,-Math.PI,Math.PI,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.6};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,1,'#39bae6');
    const z1x=(p.z1 as number)*Math.cos(p.z2 as number), z1y=(p.z1 as number)*Math.sin(p.z2 as number);
    const p1x=(p.p1 as number)*Math.cos(p.p2 as number), p1y=(p.p1 as number)*Math.sin(p.p2 as number);
    // zeros + their conjugates
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    for(const [x,y] of [[z1x,z1y],[z1x,-z1y]]){s.ctx.beginPath(); s.ctx.arc(x,y,0.06,0,Math.PI*2); s.ctx.stroke();}
    // poles ×
    s.ctx.strokeStyle='#f07178';
    for(const [x,y] of [[p1x,p1y],[p1x,-p1y]]){s.ctx.beginPath(); s.ctx.moveTo(x-0.06,y-0.06); s.ctx.lineTo(x+0.06,y+0.06); s.ctx.moveTo(x-0.06,y+0.06); s.ctx.lineTo(x+0.06,y-0.06); s.ctx.stroke();}
  },
} satisfies Formula;
