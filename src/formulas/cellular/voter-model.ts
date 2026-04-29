import { i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'voter-model',title:'选民模型',domain:'cellular',level:3,tex:'P(\\text{flip})=\\#\\text{opposite}/4',blurb:'每代随机抄一个邻居 → 大块同意见区域。'},
  params:[i('speed','速度',2,1,10)],
  size:120,
  init:(_p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<0.5?1:0;},
  step:(_p,g,n,W,H)=>{for(let i=0;i<W;i++) for(let j=0;j<H;j++){const r=Math.floor(Math.random()*4);
    const ds=[[-1,0],[1,0],[0,-1],[0,1]]; const [di,dj]=ds[r];
    n[i*H+j]=g[((i+di+W)%W)*H+(j+dj+H)%H];
  }},
});
