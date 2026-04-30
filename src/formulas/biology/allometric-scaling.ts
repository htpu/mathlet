import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'allometric-scaling',title:'异速生长定律',domain:'biology',level:2,tex:'Y=aM^b',blurb:'代谢率 ∝ M^{3/4}（Kleiber）。'},
  params:[n('a','a',1,0.1,10,0.01),n('b','b',0.75,0,2,0.01)],
  fn:p=>x=>{if(x<=0) return NaN; return (p.a as number)*Math.pow(x,p.b as number);},
  view:{cx:50,cy:30,scale:3},
});
