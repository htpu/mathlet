import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'bifurcation',title:'逻辑斯蒂分岔图',domain:'ode',level:5,tex:'x_{n+1}=rx_n(1-x_n)',blurb:'扫 r ∈ [0,4]，绘制稳态分布。Feigenbaum 倍周期。',surface:'canvas2d'},
  params:[n('rmin','r 起',2.5,0,4,0.001),n('rmax','r 止',4,0,4,0.001),i('warmup','瞬态',300,50,2000),i('plot','绘点',200,50,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const rmin=p.rmin as number, rmax=p.rmax as number;
    const W=Math.floor(width), H=Math.floor(height);
    const img=ctx.createImageData(W,H);
    for(let px=0;px<W;px++){
      const r=rmin+(rmax-rmin)*(px/W);
      let x=0.4;
      for(let i=0;i<(p.warmup as number);i++) x=r*x*(1-x);
      for(let i=0;i<(p.plot as number);i++){
        x=r*x*(1-x);
        const py=Math.floor((1-x)*H);
        if(py>=0&&py<H){const k=(py*W+px)*4; img.data[k]=Math.min(255,img.data[k]+30); img.data[k+1]=Math.min(255,img.data[k+1]+25); img.data[k+2]=Math.min(255,img.data[k+2]+15); img.data[k+3]=255;}
      }
    }
    ctx.putImageData(img,0,0);
  },
} satisfies Formula;
