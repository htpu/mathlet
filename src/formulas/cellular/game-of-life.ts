import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'game-of-life',title:'康威生命游戏',domain:'cellular',level:2,tex:'\\text{B3/S23}',blurb:'细胞 = 0/1，3 邻居生，2/3 邻居存活。'},
  params:[i('speed','每帧步数',1,1,10),n('density','初始密度',0.3,0.05,0.7,0.01)],
  size:120,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} const v=g[i*H+j]; n[i*H+j]=v?(c===2||c===3?1:0):(c===3?1:0);}},
});
