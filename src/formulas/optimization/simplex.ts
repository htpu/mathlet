import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'simplex-2d',title:'2D 单纯形可行域',domain:'optimization',level:4,tex:'\\max c^T x \\text{ s.t. } Ax\\le b',blurb:'看可行多边形，目标函数线扫过最优顶点。',surface:'canvas2d'},
  params:[n('c1','c₁',1,-3,3,0.01),n('c2','c₂',1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:2,cy:2,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    // Constraints: x>=0, y>=0, x+y<=4, 2x+y<=5
    const verts=[[0,0],[2.5,0],[1,3],[0,4]];
    s.ctx.fillStyle='rgba(255,180,84,0.3)';
    s.ctx.beginPath(); verts.forEach((v,i)=>i===0?s.ctx.moveTo(v[0],v[1]):s.ctx.lineTo(v[0],v[1])); s.ctx.closePath(); s.ctx.fill();
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); verts.forEach((v,i)=>i===0?s.ctx.moveTo(v[0],v[1]):s.ctx.lineTo(v[0],v[1])); s.ctx.closePath(); s.ctx.stroke();
    // Best vertex
    let best=verts[0], bestVal=-Infinity;
    for(const ve of verts){const vv=(p.c1 as number)*ve[0]+(p.c2 as number)*ve[1]; if(vv>bestVal){bestVal=vv; best=ve;}}
    fillCircle(s,v,best[0],best[1],6,'#f07178');
    for(const ve of verts) fillCircle(s,v,ve[0],ve[1],3,'#cbccc6');
    // Iso-line through optimum
    const c1=p.c1 as number, c2=p.c2 as number;
    if(Math.abs(c2)>1e-6){const f=(x:number)=>(bestVal-c1*x)/c2;
      s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(-1, f(-1)); s.ctx.lineTo(6, f(6)); s.ctx.stroke();}
  },
} satisfies Formula;
