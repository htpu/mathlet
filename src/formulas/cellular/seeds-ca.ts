import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'seeds-ca',title:'Seeds (B2/S)',domain:'cellular',level:2,tex:'B2/S',blurb:'每代细胞死，2 邻居诞生。混乱涌现。'},
  params:[i('speed','速度',1,1,5),n('density','初始密度',0.05,0.005,0.3,0.005)],
  size:160,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} n[i*H+j]=g[i*H+j]?0:(c===2?1:0);}},
});
