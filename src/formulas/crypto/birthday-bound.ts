import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'birthday-bound',title:'生日攻击概率',domain:'crypto',level:3,tex:'P\\approx 1-e^{-k(k-1)/(2N)}',blurb:'k 次哈希抽样命中概率。N=2^n 时 k≈√N。'},
  params:[i('N','N',1000000,100,1e9)],
  fn:p=>k=>k<0?NaN:1-Math.exp(-k*(k-1)/(2*(p.N as number))),
  view:{cx:1500,cy:0.5,scale:0.05},
});
