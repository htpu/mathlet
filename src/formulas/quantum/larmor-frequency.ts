import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'larmor-frequency',title:'Larmor 进动频率',domain:'quantum',level:3,tex:'\\omega_L=\\gamma B',blurb:'核磁矩在磁场中的进动角频率。横轴 B (T)。'},
  params:[n('gamma','γ (10⁸ rad/s/T)',2.675,0.1,30,0.001)],
  fn:p=>B=>(p.gamma as number)*1e8*B,
  view:{cx:1,cy:1e8,scale:50},
});
