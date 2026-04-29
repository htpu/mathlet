import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fm-modulation',title:'FM 调频',domain:'signals',level:3,tex:'\\cos(\\omega_c t+\\beta\\sin\\omega_m t)',blurb:'载波频率随调制信号变化。'},
  params:[n('fc','载波 fc',10,1,30,0.1),n('fm','调制 fm',1,0.1,5,0.05),n('beta','调制指数 β',3,0,10,0.05)],
  fn:p=>x=>Math.cos(2*Math.PI*(p.fc as number)*x+(p.beta as number)*Math.sin(2*Math.PI*(p.fm as number)*x)),
  view:{cx:0.5,cy:0,scale:200},
});
