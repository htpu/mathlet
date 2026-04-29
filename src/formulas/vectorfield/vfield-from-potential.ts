import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'vfield-from-potential',title:'势函数梯度场',domain:'vectorfield',level:3,tex:'F=\\nabla\\phi',blurb:'φ = sin(ax)cos(by) 的梯度场。'},
  params:[n('a','a',1.5,0.1,4,0.01),n('b','b',1,0.1,4,0.01)],
  field:p=>(x,y)=>{const a=p.a as number, b=p.b as number; return [a*Math.cos(a*x)*Math.cos(b*y), -b*Math.sin(a*x)*Math.sin(b*y)];},
  view:{cx:0,cy:0,scale:30},
});
