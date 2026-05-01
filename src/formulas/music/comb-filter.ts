import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'comb-filter',title:'梳状滤波器响应',domain:'music',level:3,tex:'|H(\\omega)|=\\sqrt{1+a^2+2a\\cos(\\omega d)}',blurb:'反馈延迟 d → 频率响应呈梳齿。横轴 ω。'},
  params:[n('a','a',0.6,0,0.95,0.01),n('d','d',1.2,0.2,5,0.01)],
  fn:p=>w=>{const a=p.a as number,d=p.d as number;return Math.sqrt(1+a*a+2*a*Math.cos(w*d));},
  view:{cx:Math.PI,cy:1,scale:50},
});
