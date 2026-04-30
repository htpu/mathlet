import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'stefan-boltzmann',title:'斯特藩-玻尔兹曼定律',domain:'algebra',level:2,tex:'P=\\sigma\\varepsilon T^4',blurb:'辐射功率 ∝ T⁴。横轴 T (K)。'},
  params:[n('eps','发射率 ε',1,0.1,1,0.01)],
  fn:p=>x=>{const sig=5.67e-8; return sig*(p.eps as number)*Math.pow(x,4)/1e6;},
  view:{cx:3000,cy:3,scale:0.7},
});
