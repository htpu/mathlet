import { n, i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'forest-fire',title:'森林火灾',domain:'cellular',level:3,tex:'p\\text{ grow}, f\\text{ ignite}',blurb:'树/火/空，雷击点燃 + 自然生长，临界相变。'},
  params:[i('speed','速度',2,1,10),n('grow','生长 p',0.01,0.001,0.1,0.001),n('ignite','点燃 f',0.0005,0,0.01,0.0001)],
  size:160,
  init:(_p,g,W,H)=>{for(let i=0;i<W*H;i++) g[i]=Math.random()<0.5?1:0;},
  step:(p,g,n,W,H)=>{
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const idx=i*H+j; const v=g[idx];
      if(v===2) n[idx]=0;
      else if(v===1){let burn=false;
        for(let di=-1;di<=1;di++) for(let dj=-1;dj<=1;dj++){if(di===0&&dj===0) continue; if(g[((i+di+W)%W)*H+(j+dj+H)%H]===2){burn=true; break;}}
        if(burn||Math.random()<(p.ignite as number)) n[idx]=2; else n[idx]=1;
      }
      else n[idx]=Math.random()<(p.grow as number)?1:0;
    }
  },
  colorize:v=>v===0?[10,14,20]:v===1?[80,180,80]:[255,80,40],
});
