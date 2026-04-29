import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
let A:Float32Array, B:Float32Array;
export default ca2d({
  meta:{slug:'turing-stripes',title:'Turing 条纹（feed/kill 调）',domain:'cellular',level:4,tex:'\\text{Gray-Scott variant}',blurb:'调 feed/kill 出条纹 / 斑点。'},
  params:[i('speed','速度',2,1,5),n('feed','feed',0.025,0.005,0.1,0.001),n('kill','kill',0.06,0.01,0.1,0.001)],
  size:100,
  init:(_p,g,W,H)=>{A=new Float32Array(W*H); B=new Float32Array(W*H);
    for(let i=0;i<W*H;i++){A[i]=1; if(Math.random()<0.05) B[i]=1;}
    for(let i=0;i<W*H;i++) g[i]=Math.floor(B[i]*255);
  },
  step:(p,_g,n,W,H)=>{const f=p.feed as number, k=p.kill as number, Du=1, Dv=0.5;
    const nA=new Float32Array(W*H), nB=new Float32Array(W*H);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const idx=i*H+j;
      const lA=A[((i-1+W)%W)*H+j]+A[((i+1)%W)*H+j]+A[i*H+(j-1+H)%H]+A[i*H+(j+1)%H]-4*A[idx];
      const lB=B[((i-1+W)%W)*H+j]+B[((i+1)%W)*H+j]+B[i*H+(j-1+H)%H]+B[i*H+(j+1)%H]-4*B[idx];
      const r=A[idx]*B[idx]*B[idx];
      nA[idx]=A[idx]+(Du*lA-r+f*(1-A[idx]));
      nB[idx]=B[idx]+(Dv*lB+r-(k+f)*B[idx]);
    }
    A=nA; B=nB;
    for(let i=0;i<W*H;i++) n[i]=Math.floor(Math.min(1,Math.max(0,B[i]))*255);
  },
  colorize:v=>[Math.floor(180-v*0.7), v, Math.floor(50+v*0.3)],
});
