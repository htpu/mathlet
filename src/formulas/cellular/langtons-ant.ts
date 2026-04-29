import { i, n } from '../types';
import { ca2d } from '../../templates/ca2d';
let antX=0, antY=0, antD=0;
export default ca2d({
  meta:{slug:'langtons-ant',title:'Langton 蚂蚁',domain:'cellular',level:3,tex:'\\text{turn left/right per cell color}',blurb:'白格右转翻黑，黑格左转翻白。10000 步后构建"高速公路"。'},
  params:[i('speed','每帧步数',50,1,500)],
  size:160,
  init:(_p,_g,W,H)=>{antX=W>>1; antY=H>>1; antD=0;},
  step:(_p,g,n,W,H)=>{n.set(g);
    const idx=antX*H+antY;
    const v=n[idx];
    if(v) antD=(antD+3)%4; else antD=(antD+1)%4;
    n[idx]=v?0:1;
    if(antD===0) antY=(antY+1)%H;
    else if(antD===1) antX=(antX+1)%W;
    else if(antD===2) antY=(antY-1+H)%H;
    else antX=(antX-1+W)%W;
  },
});
