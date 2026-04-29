import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'gradient-field',title:'梯度场 ∇f',domain:'vectorfield',level:3,tex:'\\nabla f=(\\partial_x f,\\partial_y f)',blurb:'高斯峰的梯度向量。'},
  params:[n('a','峰高 a',1,-2,2,0.01),n('s','宽度 σ',1,0.3,3,0.01)],
  field:p=>(x,y)=>{const a=p.a as number, s=p.s as number; const c=-a*Math.exp(-(x*x+y*y)/(2*s*s))/(s*s); return [c*x, c*y];},
  view:{cx:0,cy:0,scale:30},
});
