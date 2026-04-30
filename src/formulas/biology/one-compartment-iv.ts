import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'one-compartment-iv',title:'静脉一室模型',domain:'biology',level:2,tex:'C(t)=C_0 e^{-k_e t}',blurb:'单次静推后血药浓度。'},
  params:[n('C0','C₀',100,1,500,0.1),n('ke','ke',0.3,0.01,2,0.01)],
  fn:p=>t=>{if(t<0) return NaN; return (p.C0 as number)*Math.exp(-(p.ke as number)*t);},
  view:{cx:5,cy:50,scale:30},
});
