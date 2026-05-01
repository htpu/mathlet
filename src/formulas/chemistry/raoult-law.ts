import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'raoult-law',title:'Raoult 定律',domain:'chemistry',level:2,tex:'P=x_AP_A^*+x_BP_B^*',blurb:'理想溶液总蒸气压随摩尔分数线性变化。横轴 xA。'},
  params:[n('PA','PA*(kPa)',80,1,200,0.1),n('PB','PB*(kPa)',30,1,200,0.1)],
  fn:p=>x=>x*(p.PA as number)+(1-x)*(p.PB as number),
  view:{cx:0.5,cy:55,scale:300},
});
