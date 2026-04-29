import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'paraboloid',title:'椭圆抛物面 z=x²+y²',domain:'topology',level:2,tex:'z=ax^2+by^2',blurb:'a=b 旋转抛物面，a≠b 椭圆抛物。'},
  params:[n('a','a',1,-2,2,0.01),n('b','b',1,-2,2,0.01)],
  parametric:p=>{const a=p.a as number, b=p.b as number; return (u,v,t)=>t.set(u, a*u*u+b*v*v, v);},
  uRange:[-1.5,1.5], vRange:[-1.5,1.5], segments:[60,60], color:0x39bae6,
});
