import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'catenoid',title:'悬链面',domain:'topology',level:4,tex:'(c\\cosh(v/c)\\cos u,v,c\\cosh(v/c)\\sin u)',blurb:'另一种极小曲面。'},
  params:[n('c','c',1,0.3,2,0.01),n('h','高度',2,0.5,4,0.01)],
  parametric:p=>{const c=p.c as number, h=p.h as number;
    return (u,v,t)=>{const V=v*h*2-h; t.set(c*Math.cosh(V/c)*Math.cos(u), V, c*Math.cosh(V/c)*Math.sin(u));};},
  uRange:[0,Math.PI*2], vRange:[0,1], segments:[60,40], color:0xc2d94c,
});
