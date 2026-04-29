import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'uniform-dist',title:'均匀分布',domain:'probability',level:1,tex:'p(x)=1/(b-a)',blurb:'矩形 PDF。'},
  params:[n('a','a',0,-3,3,0.01),n('b','b',1,-3,3,0.01)],
  fn:p=>x=>x>=(p.a as number)&&x<=(p.b as number)?1/((p.b as number)-(p.a as number)):0,
  view:{cx:0.5,cy:0.6,scale:80},
});
