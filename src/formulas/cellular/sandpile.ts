import { i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'sandpile',title:'Abelian 沙堆',domain:'cellular',level:4,tex:'\\text{toppling: }4\\to 4\\times 1',blurb:'每格 ≥4 时向 4 邻居倒沙。临界态 → 复杂图样。'},
  params:[i('speed','速度',5,1,30),i('drop','每帧加沙',2,0,20)],
  size:140,
  init:(_p,g,W,H)=>{g[((W>>1)*H)+(H>>1)]=200;},
  step:(p,g,n,W,H)=>{n.set(g);
    for(let k=0;k<(p.drop as number);k++) n[((W>>1)*H)+(H>>1)]+=1;
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){if(n[i*H+j]>=4){const t=Math.floor(n[i*H+j]/4); n[i*H+j]-=4*t;
      n[((i-1+W)%W)*H+j]+=t; n[((i+1)%W)*H+j]+=t; n[i*H+(j-1+H)%H]+=t; n[i*H+(j+1)%H]+=t;}}
  },
  colorize:v=>{const c=Math.min(3,v); const t=c/3; return [Math.floor(255*t), Math.floor(180*t*0.7), Math.floor(80*(1-t))];},
});
