import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'partial-derivative',title:'偏导（曲面切片）',domain:'calculus',level:3,tex:'\\partial f/\\partial x=\\lim\\frac{f(x+h,y)-f(x,y)}{h}',blurb:'f(x,y)=sin(ax)cos(by) 曲面。'},
  params:[n('a','a',1.5,0.1,4,0.01),n('b','b',1,0.1,4,0.01)],
  parametric:p=>(u,v,t)=>t.set(u, Math.sin((p.a as number)*u)*Math.cos((p.b as number)*v)*0.5, v),
  uRange:[-2,2], vRange:[-2,2], segments:[60,60], color:0xc2d94c,
});
