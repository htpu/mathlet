import type { Formula } from '../types';
import { n } from '../types';
const N=80;
let phi:Float32Array; let last='';
export default {
  meta:{slug:'cahn-hilliard',title:'Cahn-Hilliard（相分离）',domain:'pde',level:5,tex:'\\phi_t=\\nabla^2(\\phi^3-\\phi-\\epsilon^2\\nabla^2\\phi)',blurb:'相场分离动力学。'},
  params:[n('eps','ε',0.05,0.01,0.3,0.005),n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!phi||last!==sig){phi=new Float32Array(N*N); for(let i=0;i<N*N;i++) phi[i]=(Math.random()-0.5)*0.1; last=sig;}
    const eps=p.eps as number;
    for(let it=0;it<3;it++){
      const lap=new Float32Array(N*N);
      for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++) lap[i*N+j]=phi[(i+1)*N+j]+phi[(i-1)*N+j]+phi[i*N+j+1]+phi[i*N+j-1]-4*phi[i*N+j];
      const f=new Float32Array(N*N);
      for(let i=0;i<N*N;i++) f[i]=phi[i]**3-phi[i]-eps*eps*lap[i];
      const lapf=new Float32Array(N*N);
      for(let i=1;i<N-1;i++) for(let j=1;j<N-1;j++) lapf[i*N+j]=f[(i+1)*N+j]+f[(i-1)*N+j]+f[i*N+j+1]+f[i*N+j-1]-4*f[i*N+j];
      const next=new Float32Array(N*N);
      for(let i=0;i<N*N;i++) next[i]=phi[i]+0.05*lapf[i];
      phi=next;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    for(let i=0;i<N*N;i++){const v=Math.tanh(phi[i]*5); const k=i*4;
      img.data[k]=Math.floor(128+v*120); img.data[k+1]=Math.floor(128); img.data[k+2]=Math.floor(128-v*120); img.data[k+3]=255;}
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
