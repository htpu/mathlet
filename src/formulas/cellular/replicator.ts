import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'replicator',title:'Replicator (B1357/S1357)',domain:'cellular',level:3,tex:'B1357/S1357',blurb:'每个图案最终复制并填满。'},
  params:[i('speed','速度',1,1,5)],
  size:140,
  init:(_p,g,W,H)=>{const cx=W>>1, cy=H>>1; for(let i=cx-2;i<=cx+2;i++) for(let j=cy-2;j<=cy+2;j++) g[i*H+j]=1;},
  step:(_p,g,n,W,H)=>{const odd=new Set([1,3,5,7]);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} n[i*H+j]=odd.has(c)?1:0;}},
});
