import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'brian-brain',title:"Brian's Brain",domain:'cellular',level:3,tex:'\\text{on/refractory/off}',blurb:'三态元胞，3 邻居打开，1 步不应期。涌现波纹。'},
  params:[i('speed','速度',2,1,10), n('density','初始密度',0.3,0.05,0.6,0.01)],
  size:140,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<(p.density as number)?1:0;},
  step:(_p,g,n,W,H)=>{
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const idx=i*H+j; const v=g[idx];
      if(v===1) n[idx]=2;
      else if(v===2) n[idx]=0;
      else {let c=0; for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; if(g[((i+di+W)%W)*H+(j+dj+H)%H]===1) c++;} n[idx]=c===2?1:0;}
    }
  },
  colorize:v=>v===0?[10,14,20]:v===1?[255,180,84]:[57,90,120],
});
