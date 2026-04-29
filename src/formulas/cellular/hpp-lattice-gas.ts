import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'hpp-lattice-gas',title:'HPP 格子气体',domain:'cellular',level:4,tex:'\\text{4-direction collisions}',blurb:'格子上 4 方向粒子碰撞 → 流体涌现。'},
  params:[i('speed','速度',1,1,5),n('density','初始密度',0.4,0.05,0.9,0.01)],
  size:80,
  init:(p,g,W,H)=>{for(let i=0;i<W*H;i++){let s=0; for(let b=0;b<4;b++) if(Math.random()<(p.density as number)/4) s|=(1<<b); g[i]=s;}},
  step:(_p,g,n,W,H)=>{const adv=new Uint8Array(W*H);
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){const v=g[i*H+j];
      if(v&1) adv[((i+1)%W)*H+j]|=1; // E
      if(v&2) adv[i*H+(j+1)%H]|=2; // S
      if(v&4) adv[((i-1+W)%W)*H+j]|=4; // W
      if(v&8) adv[i*H+(j-1+H)%H]|=8; // N
    }
    for(let i=0;i<W*H;i++){let v=adv[i];
      if(v===5) v=10; // E+W → N+S
      else if(v===10) v=5;
      n[i]=v;
    }
  },
  colorize:v=>{const c=Math.floor(((v&1)+!!(v&2)+!!(v&4)+!!(v&8))*60); return [c, c+30, c+50];},
});
