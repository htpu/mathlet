import { i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'conway-glider',title:'Conway 滑翔机',domain:'cellular',level:2,tex:'\\text{period-4 mover}',blurb:'5 格图样每 4 步移动 1 格。'},
  params:[i('speed','速度',1,1,5)],
  size:60,
  init:(_p,g,W,H)=>{const cx=W/4, cy=H/4;
    const pts=[[0,1],[1,2],[2,0],[2,1],[2,2]];
    for(const [dx,dy] of pts) g[(cx+dx|0)*H+(cy+dy|0)]=1;},
  step:(_p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; c+=g[((i+di+W)%W)*H+(j+dj+H)%H];} const v=g[i*H+j]; n[i*H+j]=v?(c===2||c===3?1:0):(c===3?1:0);}},
});
