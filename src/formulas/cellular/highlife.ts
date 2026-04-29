import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'highlife',title:'HighLife (B36/S23)',domain:'cellular',level:2,tex:'B36/S23',blurb:'生命变种，含 replicator 复制子。'},
  params:[i('speed','速度',1,1,5),n('density','初始密度',0.4,0.05,0.7,0.01)],
  size:120,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} const v=g[i*H+j]; n[i*H+j]=v?(c===2||c===3?1:0):(c===3||c===6?1:0);}},
});
