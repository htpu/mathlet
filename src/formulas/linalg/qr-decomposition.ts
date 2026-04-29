import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'qr-decomposition',title:'QR 分解',domain:'linalg',level:3,tex:'A=QR',blurb:'Gram-Schmidt 分解 A = 正交 Q × 上三角 R。'},
  params:[n('a1x','col1.x',2,-3,3,0.01),n('a1y','col1.y',1,-3,3,0.01),n('a2x','col2.x',1,-3,3,0.01),n('a2y','col2.y',1.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a1=[p.a1x as number, p.a1y as number]; const a2=[p.a2x as number, p.a2y as number];
    const r11=Math.hypot(a1[0],a1[1]); const q1=[a1[0]/r11, a1[1]/r11];
    const r12=q1[0]*a2[0]+q1[1]*a2[1];
    const w=[a2[0]-r12*q1[0], a2[1]-r12*q1[1]]; const r22=Math.hypot(w[0],w[1]); const q2=[w[0]/r22, w[1]/r22];
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(a1[0],a1[1]); s.ctx.moveTo(0,0); s.ctx.lineTo(a2[0],a2[1]); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(q1[0],q1[1]); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(q2[0],q2[1]); s.ctx.stroke();
  },
} satisfies Formula;
