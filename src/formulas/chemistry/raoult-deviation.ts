import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'raoult-deviation',title:'非理想溶液偏差 (Margules)',domain:'chemistry',level:4,tex:'\\ln\\gamma_1=A\\,x_2^2',blurb:'活度系数随对方摩尔分数平方增长。横轴 x₂。'},
  params:[n('A','A',1,-2,2,0.01)],
  fn:p=>x=>(p.A as number)*x*x,
  view:{cx:0.5,cy:0.25,scale:300},
});
