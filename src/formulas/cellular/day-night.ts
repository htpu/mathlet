import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'day-night',title:'Day & Night (B3678/S34678)',domain:'cellular',level:3,tex:'B3678/S34678',blurb:'对偶规则，背景翻转后规则不变。'},
  params:[i('speed','速度',1,1,5),n('density','初始密度',0.5,0.05,0.95,0.01)],
  size:140,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(p,g,n,W,H)=>{const Bset=new Set([3,6,7,8]), Sset=new Set([3,4,6,7,8]);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} n[i*H+j]=g[i*H+j]?(Sset.has(c)?1:0):(Bset.has(c)?1:0);}},
});
