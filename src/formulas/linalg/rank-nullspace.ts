import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, text } from '../../render/canvas2d';
export default {
  meta:{slug:'rank-nullspace',title:'秩与零空间',domain:'linalg',level:3,tex:'\\dim N(A)+\\text{rank}(A)=n',blurb:'2x2 矩阵的列空间（黄）+ 零空间（红）。',surface:'canvas2d'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',2,-3,3,0.01),n('c','c',2,-3,3,0.01),n('d','d',4,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const {a,b,c,d}=p as any;
    const det=a*d-b*c;
    const rank=Math.abs(det)<1e-6?(Math.hypot(a,c)<1e-6&&Math.hypot(b,d)<1e-6?0:1):2;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(-3*a,-3*c); s.ctx.lineTo(3*a,3*c); s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.beginPath(); s.ctx.moveTo(-3*b,-3*d); s.ctx.lineTo(3*b,3*d); s.ctx.stroke();
    if(rank<2){const nx=-b, ny=a; const m=Math.hypot(nx,ny); if(m>1e-9){s.ctx.strokeStyle='#f07178'; s.ctx.lineWidth=2.5/v.scale;
      s.ctx.beginPath(); s.ctx.moveTo(-3*nx/m,-3*ny/m); s.ctx.lineTo(3*nx/m,3*ny/m); s.ctx.stroke();}}
    text(s,12,12,`rank=${rank}, dim N=${2-rank}`,'#cbccc6',13);
  },
} satisfies Formula;
