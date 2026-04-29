import type { Formula } from '../types';
import { n } from '../types';
const N=64;
let u:Float32Array; let last='';
export default {
  meta:{slug:'poisson-2d',title:'2D 泊松方程',domain:'pde',level:4,tex:'-\\nabla^2 u=f',blurb:'右端 = 高斯源，零边界条件，Jacobi 求解。',surface:'canvas2d',animated:true},
  params:[n('amp','源强度',1,-2,2,0.01),n('cx','源位置 x',0.5,0,1,0.01),n('cy','源位置 y',0.5,0,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.amp}|${p.cx}|${p.cy}`;
    if(!u||last!==sig){u=new Float32Array(N*N); last=sig;}
    const a=p.amp as number, cx=(p.cx as number)*N, cy=(p.cy as number)*N;
    for(let it=0;it<20;it++){const next=new Float32Array(N*N);
      for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++){const f=a*Math.exp(-((i-cx)**2+(j-cy)**2)/40); next[i*N+j]=0.25*(u[(i+1)*N+j]+u[(i-1)*N+j]+u[i*N+j+1]+u[i*N+j-1]+f);}
      u=next;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    let max=1; for(let i=0;i<N*N;i++) if(Math.abs(u[i])>max) max=Math.abs(u[i]);
    const off=document.createElement('canvas'); off.width=N; off.height=N; const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){const t=u[i]/max; img.data[i*4]=Math.floor(255*Math.max(0,t)); img.data[i*4+1]=Math.floor(180*Math.abs(t)*0.5); img.data[i*4+2]=Math.floor(255*Math.max(0,-t)); img.data[i*4+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
