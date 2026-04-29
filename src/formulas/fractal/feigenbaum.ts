import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'feigenbaum',title:'Feigenbaum 倍周期',domain:'fractal',level:5,tex:'\\delta\\approx 4.6692',blurb:'tent map / 三次 map 的分岔图。'},
  params:[n('rmin','起',2.5,1,4,0.001),n('rmax','止',4,1,4,0.001),i('warm','瞬态',300,50,2000),i('plot','点数',150,50,800)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const W=Math.floor(width), H=Math.floor(height);
    const img=ctx.createImageData(W,H);
    for(let px=0;px<W;px++){const r=(p.rmin as number)+((p.rmax as number)-(p.rmin as number))*(px/W);
      let x=0.4;
      for(let i=0;i<(p.warm as number);i++) x=r*x*(1-x);
      for(let i=0;i<(p.plot as number);i++){x=r*x*(1-x); const py=Math.floor((1-x)*H); if(py>=0&&py<H){const k=(py*W+px)*4; img.data[k]=Math.min(255,img.data[k]+40); img.data[k+1]=Math.min(255,img.data[k+1]+30); img.data[k+2]=Math.min(255,img.data[k+2]+10); img.data[k+3]=255;}}
    }
    ctx.putImageData(img,0,0);
  },
} satisfies Formula;
