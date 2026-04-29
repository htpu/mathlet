import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'cyclic-ca',title:'循环 CA (Greenberg-Hastings)',domain:'cellular',level:3,tex:'k+1\\to 0\\to ...\\to k',blurb:'多色循环 → 螺旋波。'},
  params:[i('speed','速度',1,1,5),i('k','k 状态',6,3,16),n('density','初始密度',1,0,1,0.01)],
  size:120,
  init:(p,g,W,H)=>{const k=p.k as number; for(let i=0;i<W*H;i++) g[i]=Math.floor(Math.random()*k);},
  step:(p,g,n,W,H)=>{const k=p.k as number;
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const v=g[i*H+j]; const target=(v+1)%k;
      let has=false;
      for(const [di,dj] of [[-1,0],[1,0],[0,-1],[0,1]]) if(g[((i+di+W)%W)*H+(j+dj+H)%H]===target){has=true; break;}
      n[i*H+j]=has?target:v;
    }
  },
  colorize:v=>{const t=v/16; return [Math.floor(255*Math.sin(t*Math.PI)*0.8+50), Math.floor(180*Math.cos(t*Math.PI*2)+100), Math.floor(255-t*200)];},
});
