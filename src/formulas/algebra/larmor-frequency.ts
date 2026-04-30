import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'larmor-frequency',title:'拉莫尔进动频率',domain:'algebra',level:3,tex:'\\omega_L=\\gamma B',blurb:'磁矩在外磁场中的进动角频率。横轴 B (T)。'},
  params:[n('gam','旋磁比 γ (1e8 rad/s/T)',2.675,0.1,5,0.01)],
  fn:p=>x=>(p.gam as number)*x,
  view:{cx:5,cy:5,scale:30},
});
