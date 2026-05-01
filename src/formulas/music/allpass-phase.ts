import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'allpass-phase',title:'一阶 Allpass 相位响应',domain:'music',level:3,tex:'\\phi(\\omega)=-2\\arctan\\frac{\\sin\\omega}{\\cos\\omega-a}',blurb:'幅度 = 1，全通滤波相位随频率偏移。横轴 ω。'},
  params:[n('a','a',0.5,-0.99,0.99,0.001)],
  fn:p=>w=>-2*Math.atan2(Math.sin(w),Math.cos(w)-(p.a as number)),
  view:{cx:Math.PI,cy:0,scale:30},
});
