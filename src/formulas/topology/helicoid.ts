import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'helicoid',title:'螺旋面 (helicoid)',domain:'topology',level:3,tex:'(u\\cos v,\\,u\\sin v,\\,cv)',blurb:'极小曲面，与 catenoid 等距同构。'},
  params:[n('c','螺距 c',0.3,0.05,1,0.01),n('rmax','半径',1.5,0.5,3,0.01)],
  parametric:p=>{const c=p.c as number, R=p.rmax as number;
    return (u,v,t)=>t.set(u*R*Math.cos(v*Math.PI*4), c*v*Math.PI*4, u*R*Math.sin(v*Math.PI*4));},
  uRange:[-1,1], vRange:[-1,1], segments:[40,80], color:0xc2d94c,
});
