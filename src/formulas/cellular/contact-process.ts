import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'contact-process',title:'接触过程（流行病阈值）',domain:'cellular',level:4,tex:'\\lambda > \\lambda_c \\Rightarrow\\text{ infection persists}',blurb:'感染率 λ 超过临界值 → 持续传播。'},
  params:[i('speed','速度',2,1,10),n('lambda','感染率 λ',1.7,0.5,3,0.005)],
  size:120,
  init:(_p,g,W,H)=>{const cx=W>>1, cy=H>>1; for(let i=-2;i<=2;i++) for(let j=-2;j<=2;j++) g[(cx+i)*H+(cy+j)]=1;},
  step:(p,g,n,W,H)=>{const lam=p.lambda as number;
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const v=g[i*H+j];
      if(v===1){if(Math.random()<1) n[i*H+j]=Math.random()<lam/(lam+1)?1:0;}
      else {let c=0; for(const [di,dj] of [[-1,0],[1,0],[0,-1],[0,1]]) c+=g[((i+di+W)%W)*H+(j+dj+H)%H];
        n[i*H+j]=Math.random()<lam*c/(4*(lam+1))?1:0;}}
  },
});
