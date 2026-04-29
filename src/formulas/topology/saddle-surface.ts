import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'saddle-surface',title:'马鞍面 z=x²−y²',domain:'topology',level:2,tex:'z=x^2-y^2',blurb:'高斯曲率处处为负的双曲抛物面。'},
  params:[n('a','a',1,0.2,2,0.01)],
  parametric:p=>{const a=p.a as number; return (u,v,t)=>t.set(u, a*(u*u-v*v), v);},
  uRange:[-1.5,1.5], vRange:[-1.5,1.5], segments:[60,60], color:0xffb454,
});
