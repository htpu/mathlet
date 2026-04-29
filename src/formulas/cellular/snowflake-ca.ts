import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'snowflake-ca',title:'雪花 CA (B1/S0...8)',domain:'cellular',level:3,tex:'B1/S\\text{any}',blurb:'每代细胞遇 1 邻居就生 → 类雪花分形。'},
  params:[i('speed','速度',1,1,5)],
  size:140,
  init:(_p,g,W,H)=>{g[(W>>1)*H+(H>>1)]=1;},
  step:(_p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(const [di,dj] of [[-1,0],[1,0],[0,-1],[0,1]]){c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} n[i*H+j]=g[i*H+j]||c===1?1:0;}},
});
