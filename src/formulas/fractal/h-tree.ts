import { i } from '../types';
import type { Formula } from '../types';
const f:Formula={
  meta:{slug:'h-tree',title:'H 树',domain:'fractal',level:2,tex:'\\text{recursive H pattern}',blurb:'每层缩放绘制 H 形。'},
  params:[i('depth','深度',8,1,12)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1;
    function H(cx:number,cy:number,len:number,d:number){
      if(d<=0) return;
      const h=len/2;
      ctx.beginPath();
      ctx.moveTo(cx-h,cy-h); ctx.lineTo(cx-h,cy+h);
      ctx.moveTo(cx+h,cy-h); ctx.lineTo(cx+h,cy+h);
      ctx.moveTo(cx-h,cy); ctx.lineTo(cx+h,cy);
      ctx.stroke();
      const nl=len/Math.SQRT2;
      H(cx-h,cy-h,nl,d-1); H(cx-h,cy+h,nl,d-1);
      H(cx+h,cy-h,nl,d-1); H(cx+h,cy+h,nl,d-1);
    }
    H(width/2,height/2,Math.min(width,height)*0.5,p.depth as number);
  },
};
export default f;
