import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'cents',title:'音分 (cents) 与频率比',domain:'music',level:2,tex:'\\text{cents}=1200\\log_2\\frac{f_2}{f_1}',blurb:'两音频比转换为对数音分。半音=100¢，八度=1200¢。横轴 f₂/f₁。'},
  params:[n('span','axis',2,0.5,4,0.01)],
  fn:_=>r=>r<=0?NaN:1200*Math.log2(r),
  view:{cx:1,cy:0,scale:200},
});
