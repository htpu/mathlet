import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
const justRatios=[1,16/15,9/8,6/5,5/4,4/3,45/32,3/2,8/5,5/3,9/5,15/8,2];
export default fn1d({
  meta:{slug:'just-vs-equal-deviation',title:'纯律 vs 十二平均律偏差',domain:'music',level:3,tex:'\\Delta=1200\\log_2\\frac{r_{just}}{r_{12tet}}',blurb:'纯律每度音 cents 偏差。横轴 0..12 半音。'},
  params:[i('span','axis',12,1,12)],
  fn:_=>n=>{const v=Math.round(n);if(v<0||v>12)return NaN;const r12=Math.pow(2,v/12);return 1200*Math.log2(justRatios[v]/r12);},
  view:{cx:6,cy:0,scale:50},
});
