import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'cone-3d',title:'圆锥',domain:'topology',level:1,tex:'(t\\cos u, t, t\\sin u)',blurb:'高度参数 t × 单位圆。'},
  params:[n('h','高度',2,0.5,4,0.01),n('r','底半径',1,0.3,3,0.01)],
  parametric:p=>{const h=p.h as number, r=p.r as number;
    return (u,v,t)=>t.set(v*r*Math.cos(u), -v*h+h/2, v*r*Math.sin(u));},
  uRange:[0,Math.PI*2], vRange:[0,1], segments:[40,30], color:0xffb454,
});
