import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'dct',title:'DCT-II 系数',domain:'signals',level:4,tex:'X_k=\\sum x_n\\cos(\\pi k(n+1/2)/N)',blurb:'JPEG 用的离散余弦变换。'},
  params:[i('N','N',32,8,128),n('f','信号频率',3,0.5,16,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const x=new Float64Array(N); for(let i=0;i<N;i++) x[i]=Math.cos(2*Math.PI*(p.f as number)*i/N);
    const X=new Float64Array(N);
    for(let k=0;k<N;k++){let s=0; for(let n=0;n<N;n++) s+=x[n]*Math.cos(Math.PI*k*(n+0.5)/N); X[k]=s;}
    let max=0; for(let i=0;i<N;i++) max=Math.max(max,Math.abs(X[i]));
    const padX=24, padY=24, w=width-padX*2, h=height/2-padY;
    // signal
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let i=0;i<N;i++){const px=padX+i/N*w, py=padY+h/2-x[i]*h/2.5;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
    // coefficients
    const bw=w/N;
    for(let k=0;k<N;k++){const bh=Math.abs(X[k])/max*h*0.9; const py=padY+h+padY+(X[k]>=0?h-bh:h);
      ctx.fillStyle=X[k]>=0?'#ffb454':'#f07178'; ctx.fillRect(padX+k*bw, py, bw-1, bh);}
  },
} satisfies Formula;
