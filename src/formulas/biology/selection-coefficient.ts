import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'selection-coefficient',title:'单代选择 Δp',domain:'biology',level:3,tex:'\\Delta p=\\frac{spq}{\\bar{w}}',blurb:'每代等位基因频率变化。'},
  params:[n('s','s',0.05,-0.1,0.2,0.001)],
  fn:p=>x=>{const s=p.s as number, q=1-x, w=1-s*q*q; return s*x*q/w;},
  view:{cx:0.5,cy:0,scale:300},
});
