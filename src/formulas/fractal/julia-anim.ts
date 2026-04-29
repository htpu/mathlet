import type { Formula } from '../types';
import { i, n } from '../types';
import { paletteColor } from '../../templates/escape';
export default {
  meta:{slug:'julia-anim',title:'Julia 旋转动画',domain:'fractal',level:4,tex:'c=re^{i\\theta(t)}',blurb:'c 沿单位圆游走，Julia 不断变形。',surface:'canvas2d',animated:true},
  params:[i('iter','迭代',80,32,300),n('r','c 半径',0.78,0.5,1,0.001),n('speed','速度',0.3,0,2,0.01)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const W=Math.floor(width/2), H=Math.floor(height/2);
    const ang=t*(p.speed as number);
    const cR=(p.r as number)*Math.cos(ang), cI=(p.r as number)*Math.sin(ang);
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    const max=p.iter as number;
    for(let py=0;py<H;py++) for(let px=0;px<W;px++){
      let x=(px/W-0.5)*3, y=(py/H-0.5)*3;
      let n=0;
      while(x*x+y*y<=4&&n<max){const xt=x*x-y*y+cR; y=2*x*y+cI; x=xt; n++;}
      const k=(py*W+px)*4;
      if(n>=max){img.data[k]=img.data[k+1]=img.data[k+2]=0;}
      else {const [r,g,b]=paletteColor('rainbow', n/max); img.data[k]=r; img.data[k+1]=g; img.data[k+2]=b;}
      img.data[k+3]=255;
    }
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
