import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'lp-2d',title:'2D 线性规划顶点扫描',domain:'optimization',level:3,tex:'\\max c^Tx \\text{ s.t. } Ax\\le b,x\\ge 0',blurb:'目标向量 c 决定哪个顶点最优。'},
  params:[n('c1','c₁',1,-3,3,0.01),n('c2','c₂',1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:2,cy:2,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const verts=[[0,0],[3,0],[2,2],[0,3]];
    s.ctx.fillStyle='rgba(57,186,230,0.2)'; s.ctx.beginPath();
    verts.forEach((vv,i)=>i===0?s.ctx.moveTo(vv[0],vv[1]):s.ctx.lineTo(vv[0],vv[1]));
    s.ctx.closePath(); s.ctx.fill();
    let best=verts[0], bv=-Infinity;
    for(const vv of verts){const z=(p.c1 as number)*vv[0]+(p.c2 as number)*vv[1]; if(z>bv){bv=z; best=vv;}}
    for(const vv of verts) fillCircle(s,v,vv[0],vv[1],4,vv===best?'#f07178':'#cbccc6');
  },
} satisfies Formula;
