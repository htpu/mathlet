import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'zero-order-kinetics',title:'零级反应动力学',domain:'chemistry',level:2,tex:'[A]=[A]_0-kt',blurb:'反应物浓度线性下降，速率与 [A] 无关。横轴 t (s)。'},
  params:[n('A0','[A]₀',1,0.1,5,0.01),n('k','k',0.01,0.001,0.5,0.001)],
  fn:p=>t=>Math.max(0,(p.A0 as number)-(p.k as number)*t),
  view:{cx:50,cy:0.5,scale:6},
});
