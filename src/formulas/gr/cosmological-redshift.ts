import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'cosmological-redshift',title:'宇宙学红移',domain:'gr',level:3,tex:'1+z=\\frac{a_0}{a}',blurb:'光子波长随尺度因子膨胀。横轴 a/a₀。'},
  params:[n('aspan','axis',1,0.1,5,0.01)],
  fn:_=>a=>a<=0?NaN:1/a-1,
  view:{cx:0.5,cy:1,scale:200},
});
