import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'half-life-curve',title:'半衰期消除',domain:'biology',level:1,tex:'C(t)=C_0\\cdot 2^{-t/t_{1/2}}',blurb:'每过 t½，浓度减半。'},
  params:[n('C0','C₀',100,1,500,1),n('t12','t½',5,0.1,30,0.01)],
  fn:p=>t=>{if(t<0) return NaN; return (p.C0 as number)*Math.pow(2,-t/(p.t12 as number));},
  view:{cx:15,cy:50,scale:10},
});
