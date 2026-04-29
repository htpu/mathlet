import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'quadratic-formula',title:'二次方程',domain:'algebra',level:1,tex:'x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}',blurb:'调 a/b/c 看判别式 Δ。'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',-2,-5,5,0.01),n('c','c',-3,-5,5,0.01)],
  fn:p=>x=>(p.a as number)*x*x+(p.b as number)*x+(p.c as number),
  view:{cx:0,cy:0,scale:30},
});
