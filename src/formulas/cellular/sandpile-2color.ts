import { i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'sandpile-2color',title:'Sandpile 双源',domain:'cellular',level:4,tex:'\\text{toppling 4-rule}',blurb:'两个源同时倒沙的干涉图样。'},
  params:[i('speed','速度',5,1,30),i('drop','加沙速率',2,0,20)],
  size:140,
  init:(_p,g,_W,H)=>{g[(40)*H+(40)]=200; g[(100)*H+(100)]=200;},
  step:(p,g,n,W,H)=>{n.set(g);
    for(let k=0;k<(p.drop as number);k++){n[40*H+40]+=1; n[100*H+100]+=1;}
    for(let i=0;i<W;i++) for(let j=0;j<H;j++){if(n[i*H+j]>=4){const t=Math.floor(n[i*H+j]/4); n[i*H+j]-=4*t;
      n[((i-1+W)%W)*H+j]+=t; n[((i+1)%W)*H+j]+=t; n[i*H+(j-1+H)%H]+=t; n[i*H+(j+1)%H]+=t;}}
  },
  colorize:v=>{const c=Math.min(3,v); const t=c/3; return [Math.floor(80+t*175), Math.floor(20+t*160), Math.floor(120-t*60)];},
});
