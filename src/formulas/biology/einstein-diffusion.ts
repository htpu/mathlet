import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'einstein-diffusion',title:'Einstein 扩散关系',domain:'biology',level:2,tex:'\\langle r^2\\rangle=6Dt',blurb:'布朗粒子均方位移线性增长。'},
  params:[n('D','D (μm²/s)',1,0.01,10,0.01)],
  fn:p=>t=>{if(t<0) return NaN; return 6*(p.D as number)*t;},
  view:{cx:5,cy:30,scale:30},
});
