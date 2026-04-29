import type { Formula } from '../types';
import { i, n } from '../types';
const N=80;
let u:Float32Array; let last='';
export default {
  meta:{slug:'eikonal-equation',title:'Eikonal 方程',domain:'pde',level:5,tex:'|\\nabla u|=1',blurb:'到障碍物的距离场（fast-marching 近似）。',surface:'canvas2d'},
  params:[n('cx','源 x',0.3,0,1,0.01),n('cy','源 y',0.3,0,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.cx}|${p.cy}`;
    if(!u||last!==sig){u=new Float32Array(N*N); u.fill(1e9);
      const ix=Math.floor((p.cx as number)*N), iy=Math.floor((p.cy as number)*N);
      u[ix*N+iy]=0;
      for(let it=0;it<200;it++) for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++){
        const m=Math.min(u[(i-1)*N+j], u[(i+1)*N+j], u[i*N+j-1], u[i*N+j+1]);
        u[i*N+j]=Math.min(u[i*N+j], m+1);
      }
      last=sig;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    let max=0; for(let i=0;i<N*N;i++) if(u[i]<1e8&&u[i]>max) max=u[i];
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){const v=u[i]/max; const c=Math.floor(255*Math.max(0,1-v));
      img.data[i*4]=Math.floor(255*v*0.5); img.data[i*4+1]=c; img.data[i*4+2]=Math.floor(255*(1-v)); img.data[i*4+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
