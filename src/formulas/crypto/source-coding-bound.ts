import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'source-coding-bound',title:'Shannon 源编码界',domain:'crypto',level:3,tex:'H(X)\\le \\bar L<H(X)+1',blurb:'熵下界至最小平均码长。横轴二元熵 p 概率。'},
  params:[],
  fn:_=>p=>{if(p<=0||p>=1)return 0;return -p*Math.log2(p)-(1-p)*Math.log2(1-p);},
  view:{cx:0.5,cy:0.5,scale:300},
});
