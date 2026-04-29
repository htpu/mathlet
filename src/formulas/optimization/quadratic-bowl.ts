import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'quadratic-bowl',title:'二次型曲面',domain:'optimization',level:2,tex:'f(x,y)=ax^2+by^2+cxy',blurb:'凸/鞍/退化分类。'},
  params:[n('a','a',1,-2,2,0.01),n('b','b',1,-2,2,0.01),n('c','c',0,-2,2,0.01)],
  parametric:p=>{const a=p.a as number, b=p.b as number, c=p.c as number;
    return (u,v,t)=>t.set(u, a*u*u+b*v*v+c*u*v, v);},
  uRange:[-1.5,1.5], vRange:[-1.5,1.5], segments:[60,60], color:0xffb454,
});
