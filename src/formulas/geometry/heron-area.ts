import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'heron-area',title:'Heron 三角形面积',domain:'geometry',level:2,tex:'A=\\sqrt{s(s-a)(s-b)(s-c)}',blurb:'固定 b, c，扫第三边 a。横轴 a。'},
  params:[n('b','b',4,1,10,0.01),n('c','c',5,1,10,0.01)],
  fn:p=>a=>{const b=p.b as number,c=p.c as number;if(a<=Math.abs(b-c)||a>=b+c) return 0;const s=(a+b+c)/2;return Math.sqrt(s*(s-a)*(s-b)*(s-c));},
  view:{cx:5,cy:5,scale:30},
});
