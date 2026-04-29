import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'anneal',title:'Annealing CA (B4678/S35678)',domain:'cellular',level:3,tex:'B4678/S35678',blurb:'稳定大块结构的退火规则。'},
  params:[i('speed','速度',1,1,5),n('density','初始密度',0.5,0.1,0.9,0.01)],
  size:140,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(_p,g,n,W,H)=>{const Bset=new Set([4,6,7,8]), Sset=new Set([3,5,6,7,8]);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} n[i*H+j]=g[i*H+j]?(Sset.has(c)?1:0):(Bset.has(c)?1:0);}},
});
