import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fm-synthesis',title:'FM 合成',domain:'music',level:3,tex:'y=\\sin(2\\pi f_c t+I\\sin(2\\pi f_m t))',blurb:'调制频率扭曲载波产生新泛音。'},
  params:[n('fc','载波 fc',5,1,20,0.01),n('fm','调制 fm',2,0.5,15,0.01),n('I','调制深 I',3,0,10,0.01)],
  fn:p=>t=>Math.sin(2*Math.PI*(p.fc as number)*t+(p.I as number)*Math.sin(2*Math.PI*(p.fm as number)*t)),
  view:{cx:1,cy:0,scale:100},
});
