import type { Formula } from '../types';
import { n } from '../types';
const N=80;
let u:Float32Array; let last='';
export default {
  meta:{slug:'laplace-2d',title:'2D 拉普拉斯方程',domain:'pde',level:4,tex:'\\nabla^2 u=0',blurb:'四边温度边界 → 内部稳态分布（Jacobi 迭代）。',surface:'canvas2d',animated:true},
  params:[n('top','上边温度',1,0,1,0.01),n('left','左边温度',0,0,1,0.01),n('right','右边温度',0.5,0,1,0.01),n('bottom','下边温度',0,0,1,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.top}|${p.left}|${p.right}|${p.bottom}`;
    if(!u||last!==sig){u=new Float32Array(N*N); last=sig;}
    for(let i=0;i<N;i++){u[i]=p.top as number; u[(N-1)*N+i]=p.bottom as number; u[i*N]=p.left as number; u[i*N+N-1]=p.right as number;}
    for(let k=0;k<10;k++) for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++) u[i*N+j]=0.25*(u[(i-1)*N+j]+u[(i+1)*N+j]+u[i*N+j-1]+u[i*N+j+1]);
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){const v=u[i]; img.data[i*4]=Math.floor(255*Math.min(1,v*2)); img.data[i*4+1]=Math.floor(180*Math.min(1,v)); img.data[i*4+2]=Math.floor(255*Math.max(0,1-v*2)); img.data[i*4+3]=255;}
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=true;
    ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
