import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'gram-schmidt',title:'Gram-Schmidt 正交化',domain:'linalg',level:3,tex:'u_2=v_2-\\text{proj}_{u_1}v_2',blurb:'两向量正交化为单位正交基。',surface:'canvas2d'},
  params:[n('v1x','v₁.x',2,-3,3,0.01),n('v1y','v₁.y',0.5,-3,3,0.01),n('v2x','v₂.x',1,-3,3,0.01),n('v2y','v₂.y',1.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const v1=[p.v1x as number, p.v1y as number]; const v2=[p.v2x as number, p.v2y as number];
    const m1=Math.hypot(v1[0],v1[1]); const u1=[v1[0]/m1, v1[1]/m1];
    const dot=v2[0]*u1[0]+v2[1]*u1[1];
    const w=[v2[0]-dot*u1[0], v2[1]-dot*u1[1]]; const m2=Math.hypot(w[0],w[1]); const u2=[w[0]/m2, w[1]/m2];
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(v1[0],v1[1]); s.ctx.moveTo(0,0); s.ctx.lineTo(v2[0],v2[1]); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(u1[0],u1[1]); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(u2[0],u2[1]); s.ctx.stroke();
  },
} satisfies Formula;
