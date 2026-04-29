import type { Formula } from '../types';
import { n } from '../types';
const N=120;
let u:Float32Array, up:Float32Array; let last='';
export default {
  meta:{slug:'wave-circle',title:'圆形池塘水波',domain:'pde',level:3,tex:'u_{tt}=c^2\\nabla^2 u',blurb:'圆形边界，中心扰动 → 同心环波 + 反射。',surface:'canvas2d',animated:true},
  params:[n('c','c',0.5,0.1,1,0.01),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N*N); up=new Float32Array(N*N);
      for(let i=0;i<N;i++) for(let j=0;j<N;j++){const dx=i-N/2, dy=j-N/2; const r=Math.hypot(dx,dy); if(r<8) u[i*N+j]=Math.exp(-r*r/30);}
      for(let i=0;i<N*N;i++) up[i]=u[i]; last=sig;
    }
    const c=p.c as number, r2=c*c*0.25;
    for(let k=0;k<2;k++){const next=new Float32Array(N*N);
      for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++){const dx=i-N/2, dy=j-N/2; if(dx*dx+dy*dy>(N/2-1)**2) continue;
        next[i*N+j]=2*u[i*N+j]-up[i*N+j]+r2*(u[(i+1)*N+j]+u[(i-1)*N+j]+u[i*N+j+1]+u[i*N+j-1]-4*u[i*N+j]);
      }
      up=u; u=next;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N;i++) for(let j=0;j<N;j++){const dx=i-N/2, dy=j-N/2; const inside=dx*dx+dy*dy<(N/2-1)**2;
      const v=u[i*N+j]; const t=Math.max(-1,Math.min(1,v*5));
      const k=(i*N+j)*4;
      if(!inside){img.data[k]=10; img.data[k+1]=14; img.data[k+2]=20;}
      else {img.data[k]=Math.floor(128+t*120); img.data[k+1]=Math.floor(128+Math.abs(t)*60); img.data[k+2]=Math.floor(160-t*100);}
      img.data[k+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
