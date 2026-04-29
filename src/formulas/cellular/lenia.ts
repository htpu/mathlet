import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
let kernel:Float32Array; let R=12;
export default ca2d({
  meta:{slug:'lenia',title:'Lenia（连续生命）',domain:'cellular',level:5,tex:'A_{t+1}=[A_t+\\Delta t\\cdot G(K*A_t)]_{[0,1]}',blurb:'连续值 + 平滑核 → 软体生物涌现。'},
  params:[i('speed','速度',1,1,5),n('mu','μ',0.15,0.05,0.5,0.005),n('sigma','σ',0.015,0.005,0.1,0.001),n('reset','reset',0,0,1,1)],
  size:96,
  init:(_p,g,W,H)=>{const buf=new Float32Array(W*H);
    for(let i=W/3;i<2*W/3;i++) for(let j=H/3;j<2*H/3;j++){const dx=(i-W/2)/(W/6), dy=(j-H/2)/(H/6); const d=dx*dx+dy*dy; buf[(i|0)*H+(j|0)]=Math.max(0,1-d)*Math.random();}
    for(let i=0;i<W*H;i++) g[i]=Math.floor(buf[i]*255);
    kernel=new Float32Array((2*R+1)*(2*R+1));
    let sum=0;
    for(let di=-R;di<=R;di++) for(let dj=-R;dj<=R;dj++){const r=Math.hypot(di,dj)/R; const k=r<1?Math.exp(4-1/(r*(1-r)+1e-9)):0; kernel[(di+R)*(2*R+1)+(dj+R)]=k; sum+=k;}
    for(let i=0;i<kernel.length;i++) kernel[i]/=sum;
  },
  step:(p,g,n,W,H)=>{const A=new Float32Array(W*H); for(let i=0;i<W*H;i++) A[i]=g[i]/255;
    const U=new Float32Array(W*H);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){let s=0;
      for(let di=-R;di<=R;di++) for(let dj=-R;dj<=R;dj++) s+=A[((i+di+W)%W)*H+(j+dj+H)%H]*kernel[(di+R)*(2*R+1)+(dj+R)];
      U[i*H+j]=s;
    }
    const mu=p.mu as number, sg=p.sigma as number;
    const dt=0.1;
    for(let i=0;i<W*H;i++){const G=2*Math.exp(-Math.pow(U[i]-mu,2)/(2*sg*sg))-1; const v=Math.max(0,Math.min(1,A[i]+dt*G)); n[i]=Math.floor(v*255);}
  },
  colorize:v=>[v, Math.floor(v*0.7), Math.floor(255-v*0.6)],
});
