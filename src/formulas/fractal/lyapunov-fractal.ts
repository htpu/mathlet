import type { Formula } from '../types';
import { i, n, s as sel } from '../types';
export default {
  meta:{slug:'lyapunov-fractal',title:'Lyapunov 分形',domain:'fractal',level:5,tex:'\\lambda=\\lim\\frac{1}{N}\\sum\\log|f\'(x_n)|',blurb:'AB 序列下 logistic 映射的 Lyapunov 指数。',surface:'canvas2d'},
  params:[i('iter','迭代',100,30,400),n('amin','a min',2.5,1,4,0.005),n('amax','a max',4,1,4,0.005),n('bmin','b min',2.5,1,4,0.005),n('bmax','b max',4,1,4,0.005),sel('seq','序列','AB',[{value:'AB',label:'AB'},{value:'AABB',label:'AABB'},{value:'BBABA',label:'BBABA'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const W=Math.floor(width/2), H=Math.floor(height/2);
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    const seq=p.seq as string;
    for(let py=0;py<H;py++) for(let px=0;px<W;px++){
      const a=(p.amin as number)+((p.amax as number)-(p.amin as number))*(px/W);
      const b=(p.bmin as number)+((p.bmax as number)-(p.bmin as number))*(py/H);
      let x=0.5, sum=0;
      for(let i=0;i<(p.iter as number);i++){const r=seq[i%seq.length]==='A'?a:b; x=r*x*(1-x); if(i>30){const dxv=Math.abs(r*(1-2*x)); if(dxv>0) sum+=Math.log(dxv);}}
      const lam=sum/((p.iter as number)-30);
      const k=(py*W+px)*4;
      if(lam<0){const t=Math.min(1,-lam); img.data[k]=20+Math.floor(60*t); img.data[k+1]=120+Math.floor(135*t); img.data[k+2]=20;}
      else {const t=Math.min(1,lam); img.data[k]=Math.floor(255*t); img.data[k+1]=20; img.data[k+2]=20+Math.floor(40*t);}
      img.data[k+3]=255;
    }
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
