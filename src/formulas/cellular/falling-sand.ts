import { i } from '../types';
import { ca2d } from '../../templates/ca2d';
export default ca2d({
  meta:{slug:'falling-sand',title:'下落沙子',domain:'cellular',level:2,tex:'\\text{cell falls if cell below empty}',blurb:'重力沙模拟，简单元胞规则。'},
  params:[i('speed','速度',1,1,5),i('feed','加沙速率',5,0,30)],
  size:80,
  init:(_p,g,W,H)=>{for(let i=W/3;i<2*W/3;i++) g[(i|0)*H+5]=1;},
  step:(p,g,n,W,H)=>{n.set(g);
    for(let k=0;k<(p.feed as number);k++) n[(Math.floor(W/2+(Math.random()-0.5)*5))*H+0]=1;
    for(let j=H-1;j>=1;j--) for(let i=0;i<W;i++){if(n[i*H+j]) continue;
      if(n[i*H+j-1]){n[i*H+j]=1; n[i*H+j-1]=0;}
      else if(i>0&&n[(i-1)*H+j-1]){n[i*H+j]=1; n[(i-1)*H+j-1]=0;}
      else if(i<W-1&&n[(i+1)*H+j-1]){n[i*H+j]=1; n[(i+1)*H+j-1]=0;}}
  },
  colorize:v=>v?[255,180,84]:[10,14,20],
});
