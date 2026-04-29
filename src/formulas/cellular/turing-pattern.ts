import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
let A:Float32Array, B:Float32Array;
export default ca2d({
  meta:{slug:'turing-pattern',title:'Turing 斑纹（动物毛皮）',domain:'cellular',level:4,tex:'\\text{Activator-inhibitor RD}',blurb:'激活-抑制反应扩散 → 斑点 / 条纹。'},
  params:[i('speed','速度',2,1,5),n('Da','Da',0.16,0.05,0.5,0.005),n('Db','Db',0.08,0.02,0.3,0.005),n('f','f',0.06,0.01,0.1,0.001),n('k','k',0.062,0.01,0.1,0.001)],
  size:120,
  init:(_p,g,W,H)=>{A=new Float32Array(W*H); B=new Float32Array(W*H);
    for(let i=0;i<W*H;i++){A[i]=1; B[i]=Math.random()<0.05?1:0;}
    for(let i=0;i<W*H;i++) g[i]=Math.floor(B[i]*255);
  },
  step:(p,_g,n,W,H)=>{const Da=p.Da as number, Db=p.Db as number, f=p.f as number, k=p.k as number;
    const nA=new Float32Array(W*H), nB=new Float32Array(W*H);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const idx=i*H+j;
      const lA=A[((i-1+W)%W)*H+j]+A[((i+1)%W)*H+j]+A[i*H+(j-1+H)%H]+A[i*H+(j+1)%H]-4*A[idx];
      const lB=B[((i-1+W)%W)*H+j]+B[((i+1)%W)*H+j]+B[i*H+(j-1+H)%H]+B[i*H+(j+1)%H]-4*B[idx];
      const r=A[idx]*B[idx]*B[idx];
      nA[idx]=A[idx]+Da*lA-r+f*(1-A[idx]);
      nB[idx]=B[idx]+Db*lB+r-(k+f)*B[idx];
    }
    A=nA; B=nB;
    for(let i=0;i<W*H;i++) n[i]=Math.floor(Math.min(1,Math.max(0,B[i]))*255);
  },
  colorize:v=>[v, Math.floor(v*0.5), Math.floor(255-v*0.7)],
});
