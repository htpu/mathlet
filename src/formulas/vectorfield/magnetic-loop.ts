import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'magnetic-loop',title:'电流环磁场（剖面）',domain:'vectorfield',level:4,tex:'B=\\nabla\\times A',blurb:'电流环 (±z 处) 的二维剖面 B 场。'},
  params:[n('I','电流强度 I',1,-2,2,0.01),n('a','环半径 a',0.5,0.1,1.5,0.01)],
  field:p=>(x,y)=>{const I=p.I as number, a=p.a as number;
    const dy=y-a; const dy2=y+a;
    const r1=x*x+dy*dy+0.05, r2=x*x+dy2*dy2+0.05;
    return [I*(-dy)/Math.pow(r1,1.5)+I*dy2/Math.pow(r2,1.5), I*x/Math.pow(r1,1.5)-I*x/Math.pow(r2,1.5)];},
  view:{cx:0,cy:0,scale:50},
});
