import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'blackbody-quantum',title:'量子化辐射能',domain:'quantum',level:4,tex:'E_n=nh\\nu',blurb:'普朗克量子化解决紫外灾难。横轴 n。'},
  params:[n('nu','ν (1e14 Hz)',5,0.1,10,0.01)],
  fn:p=>n=>{if(n<0) return NaN; const h=6.626e-34; return n*h*(p.nu as number)*1e14*1e20;},
  view:{cx:5,cy:5,scale:30},
});
