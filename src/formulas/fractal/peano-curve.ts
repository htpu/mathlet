import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'peano-curve',title:'Peano 填空间曲线 (Hilbert)',domain:'fractal',level:4,tex:'\\text{space-filling}',blurb:'Hilbert 曲线递归填充正方形。',surface:'canvas2d'},
  params:[i('order','阶',5,1,8)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const order=p.order as number, n=Math.pow(2,order);
    function d2xy(d:number):[number,number]{let rx,ry,t=d, x=0, y=0;
      for(let s=1;s<n;s*=2){rx=1&(t/2); ry=1&(t^rx); if(ry===0){if(rx===1){x=s-1-x; y=s-1-y;} const tt=x; x=y; y=tt;} x+=s*rx; y+=s*ry; t/=4;}
      return [x,y];}
    const sc=Math.min(width,height)*0.9/n;
    const ox=(width-n*sc)/2, oy=(height-n*sc)/2;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=Math.max(0.5, 80/n);
    ctx.beginPath();
    for(let i=0;i<n*n;i++){const [x,y]=d2xy(i); const px=ox+x*sc+sc/2, py=oy+y*sc+sc/2;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
