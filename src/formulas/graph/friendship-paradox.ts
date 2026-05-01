import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'friendship-paradox',title:'朋友的朋友更多',domain:'graph',level:3,tex:'\\langle k_{neighbor}\\rangle=\\frac{\\langle k^2\\rangle}{\\langle k\\rangle}=\\langle k\\rangle+\\frac{\\sigma^2}{\\langle k\\rangle}',blurb:'平均邻居度比平均度高 σ²/⟨k⟩。横轴 σ²。'},
  params:[n('km','⟨k⟩',5,1,30,0.01)],
  fn:p=>v=>v<0?NaN:(p.km as number)+v/(p.km as number),
  view:{cx:25,cy:10,scale:6},
});
