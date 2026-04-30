import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'catenary',title:'悬链线',domain:'algebra',level:2,tex:'y=a\\cosh(x/a)',blurb:'两端固定均匀链条形状。a 越大越平。'},
  params:[n('a','a',1,0.3,5,0.01)],
  fn:p=>x=>(p.a as number)*Math.cosh(x/(p.a as number)),
  view:{cx:0,cy:3,scale:60},
});
