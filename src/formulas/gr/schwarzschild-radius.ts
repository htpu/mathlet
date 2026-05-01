import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'schwarzschild-radius',title:'Schwarzschild 半径',domain:'gr',level:2,tex:'r_s=\\frac{2GM}{c^2}',blurb:'黑洞事件视界半径与质量。横轴 M (太阳质量)。'},
  params:[n('span','axis',50,1,500,1)],
  fn:_=>M=>M<=0?NaN:2.95*M, // km
  view:{cx:50,cy:100,scale:3},
});
