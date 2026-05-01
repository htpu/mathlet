import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gcd-step-count',title:'欧几里得 GCD 步数 (Lamé 界)',domain:'crypto',level:3,tex:'\\#\\le 5\\log_{10}\\min(a,b)',blurb:'计算 gcd 的最坏除法步数 ≤ 5 log10(min)。横轴 min(a,b)。'},
  params:[],
  fn:_=>n=>n<=0?NaN:5*Math.log10(n),
  view:{cx:5e3,cy:18,scale:0.05},
});
