import type { Formula } from '../types';
import { i } from '../types';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'buddhabrot',title:'Buddhabrot',domain:'fractal',level:5,tex:'\\text{trajectory density of escaping orbits}',blurb:'Mandelbrot 发散轨迹的累积密度。',surface:'canvas2d'},
  params:[i('samples','样本数',50000,1000,500000),i('iter','迭代',300,30,2000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const W=Math.floor(width/2), H=Math.floor(height/2);
    const acc=new Uint32Array(W*H);
    const r=mulberry32(7);
    const max=p.iter as number;
    for(let s=0;s<(p.samples as number);s++){const cx=r()*4-2.5, cy=r()*4-2;
      let x=0, y=0;
      const orbit:[number,number][]=[];
      let escaped=false;
      for(let i=0;i<max;i++){const xt=x*x-y*y+cx; y=2*x*y+cy; x=xt; orbit.push([x,y]); if(x*x+y*y>4){escaped=true; break;}}
      if(escaped) for(const [ox,oy] of orbit){const px=Math.floor((ox+2.5)/4*W), py=Math.floor((oy+2)/4*H);
        if(px>=0&&px<W&&py>=0&&py<H) acc[py*W+px]++;}
    }
    let mx=0; for(let i=0;i<W*H;i++) if(acc[i]>mx) mx=acc[i];
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    for(let i=0;i<W*H;i++){const t=Math.sqrt(acc[i]/mx); img.data[i*4]=Math.floor(255*t); img.data[i*4+1]=Math.floor(180*t*0.7); img.data[i*4+2]=Math.floor(60*t*0.4); img.data[i*4+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=false;
    ctx.save(); ctx.translate(width,0); ctx.rotate(Math.PI/2); ctx.drawImage(off,0,0,height,width); ctx.restore();
  },
} satisfies Formula;
