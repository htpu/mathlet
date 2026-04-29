import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'aliasing-2d',title:'2D 莫尔条纹',domain:'signals',level:3,tex:'\\sin(\\omega_1 x)\\cdot\\sin(\\omega_2 y)',blurb:'两频率细网叠加 → 莫尔。',surface:'canvas2d'},
  params:[n('f1','f₁',30,5,80,0.1),n('f2','f₂',32,5,80,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const W=Math.floor(width/2), H=Math.floor(height/2);
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    for(let py=0;py<H;py++) for(let px=0;px<W;px++){const x=px/W, y=py/H;
      const v=Math.sin(2*Math.PI*(p.f1 as number)*x)*Math.sin(2*Math.PI*(p.f2 as number)*y);
      const t=(v+1)/2; const k=(py*W+px)*4;
      img.data[k]=Math.floor(t*255); img.data[k+1]=Math.floor(t*180); img.data[k+2]=Math.floor((1-t)*120); img.data[k+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
