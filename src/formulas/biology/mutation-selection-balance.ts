import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'mutation-selection-balance',title:'突变-选择平衡',domain:'biology',level:4,tex:'\\hat{q}\\approx\\sqrt{\\mu/s}',blurb:'有害等位基因平衡频率。'},
  params:[n('mu','μ',1e-5,1e-8,1e-3,1e-6,true)],
  fn:p=>s=>{if(s<=0) return NaN; return Math.sqrt((p.mu as number)/s);},
  view:{cx:0.05,cy:0.02,scale:1500},
});
