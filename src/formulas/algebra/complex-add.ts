import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'complex-add',title:'复数加法（平行四边形法则）',domain:'algebra',level:1,tex:'(a+bi)+(c+di)=(a+c)+(b+d)i',blurb:'两复数相加 = 向量首尾相接 = 平行四边形对角线。',surface:'canvas2d'},
  params:[n('ax','a',1,-3,3,0.01),n('ay','b',2,-3,3,0.01),n('bx','c',2,-3,3,0.01),n('by','d',-1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const arrow=(x1:number,y1:number,x2:number,y2:number,col:string)=>{s.ctx.strokeStyle=col; s.ctx.fillStyle=col; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x1,y1); s.ctx.lineTo(x2,y2); s.ctx.stroke();
      const a=Math.atan2(y2-y1,x2-x1); const ah=0.15;
      s.ctx.beginPath(); s.ctx.moveTo(x2,y2); s.ctx.lineTo(x2-ah*Math.cos(a-0.4),y2-ah*Math.sin(a-0.4)); s.ctx.lineTo(x2-ah*Math.cos(a+0.4),y2-ah*Math.sin(a+0.4)); s.ctx.closePath(); s.ctx.fill();};
    const A=[p.ax as number, p.ay as number]; const B=[p.bx as number, p.by as number];
    const sum=[A[0]+B[0], A[1]+B[1]];
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale; s.ctx.setLineDash([0.05,0.05]);
    s.ctx.beginPath(); s.ctx.moveTo(A[0],A[1]); s.ctx.lineTo(sum[0],sum[1]); s.ctx.moveTo(B[0],B[1]); s.ctx.lineTo(sum[0],sum[1]); s.ctx.stroke(); s.ctx.setLineDash([]);
    arrow(0,0,A[0],A[1],'#39bae6');
    arrow(0,0,B[0],B[1],'#c2d94c');
    arrow(0,0,sum[0],sum[1],'#ffb454');
  },
} satisfies Formula;
