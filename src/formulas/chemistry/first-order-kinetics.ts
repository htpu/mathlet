import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'first-order-kinetics',title:'一级反应动力学',domain:'chemistry',level:2,tex:'[A]=[A]_0 e^{-kt}',blurb:'指数衰减；半衰期 t₁/₂ = ln 2 / k。'},
  params:[n('A0','[A]₀',1,0.1,5,0.01),n('k','k',0.05,0.001,1,0.001)],
  fn:p=>t=>(p.A0 as number)*Math.exp(-(p.k as number)*t),
  view:{cx:50,cy:0.5,scale:6},
});
