import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'abs-value',title:'绝对值函数',domain:'algebra',level:1,tex:'y=|ax+b|',blurb:'V 形折线。'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',0,-3,3,0.01)],
  fn:p=>x=>Math.abs((p.a as number)*x+(p.b as number)),
  view:{cx:0,cy:0,scale:60},
});
