import type { Formula } from '../types';
import { n } from '../types';
const N=80;
let u:Float32Array; let last='';
export default {
  meta:{slug:'diffusion-2d',title:'2D 扩散方程',domain:'pde',level:3,tex:'u_t=\\alpha\\nabla^2 u',blurb:'热点逐渐扩散为环形。',surface:'canvas2d',animated:true},
  params:[n('alpha','α',0.2,0.01,1,0.005),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!u||last!==sig){u=new Float32Array(N*N); for(let i=0;i<N;i++) for(let j=0;j<N;j++){const dx=i-N/2, dy=j-N/2; u[i*N+j]=Math.exp(-(dx*dx+dy*dy)/30);} last=sig;}
    const a=p.alpha as number, dt=0.05;
    for(let k=0;k<3;k++){const next=new Float32Array(N*N); for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++){next[i*N+j]=u[i*N+j]+a*dt*(u[(i+1)*N+j]+u[(i-1)*N+j]+u[i*N+j+1]+u[i*N+j-1]-4*u[i*N+j]);} u=next;}
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){const v=u[i]; img.data[i*4]=Math.floor(255*v); img.data[i*4+1]=Math.floor(180*v*0.7); img.data[i*4+2]=Math.floor(80*v*0.3); img.data[i*4+3]=255;}
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=true;
    ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
