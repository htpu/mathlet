import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
function svd2(a:number,b:number,c:number,d:number){
  // Closed-form SVD for 2x2
  const E=(a+d)/2, F=(a-d)/2, G=(c+b)/2, H=(c-b)/2;
  const Q=Math.hypot(E,H), R=Math.hypot(F,G);
  const s1=Q+R, s2=Q-R;
  const a1=Math.atan2(G,F), a2=Math.atan2(H,E);
  const theta=(a2-a1)/2, phi=(a2+a1)/2;
  return {s1,s2,theta,phi};
}
export default {
  meta:{slug:'svd',title:'SVD 几何分解',domain:'linalg',level:4,tex:'A=U\\Sigma V^T',blurb:'矩阵 = 旋转 + 缩放 + 旋转。单位圆 → 椭圆。',surface:'canvas2d'},
  params:[n('a','a',1.5,-3,3,0.01),n('b','b',0.7,-3,3,0.01),n('c','c',-0.4,-3,3,0.01),n('d','d',1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const {a,b,c,d}=p as any;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
    const {s1,s2,phi}=svd2(a,b,c,d);
    s.ctx.save();
    s.ctx.rotate(phi);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath();
    for(let t=0;t<=Math.PI*2;t+=0.01){const x=s1*Math.cos(t), y=s2*Math.sin(t); if(t===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#f07178'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(s1,0); s.ctx.stroke();
    s.ctx.strokeStyle='#c2d94c';
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(0,s2); s.ctx.stroke();
    s.ctx.restore();
  },
} satisfies Formula;
