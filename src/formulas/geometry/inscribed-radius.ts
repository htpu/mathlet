import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'inscribed-radius',title:'内切圆半径 r = A/s',domain:'geometry',level:2,tex:'r=\\frac{A}{s}',blurb:'等腰三角形 (b=c) 内切圆半径随底边 a 变化。'},
  params:[n('b','b',5,1,10,0.01)],
  fn:p=>a=>{const b=p.b as number;if(a<=0||a>=2*b)return NaN;const s=(a+2*b)/2;const A=Math.sqrt(s*(s-a)*(s-b)*(s-b));return A/s;},
  view:{cx:5,cy:1.5,scale:30},
});
