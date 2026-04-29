import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'normal-curvature',title:'法曲率（Monge 曲面）',domain:'vectorfield',level:4,tex:'\\kappa_n=\\frac{II}{I}',blurb:'Monge patch 上的法曲率分布。'},
  params:[n('a','a',1,-2,2,0.01),n('b','b',-1,-2,2,0.01)],
  parametric:p=>{const a=p.a as number, b=p.b as number; return (u,v,t)=>t.set(u, (a*u*u+b*v*v)*0.3, v);},
  uRange:[-1.5,1.5], vRange:[-1.5,1.5], segments:[60,60], color:0x39bae6,
});
