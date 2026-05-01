import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'quadratic-residue',title:'二次剩余 x² mod p',domain:'crypto',level:3,tex:'y=x^2\\bmod p',blurb:'素模 p 下的平方留数。Euler 判据基础。横轴 x。'},
  params:[i('p','p (素数)',97,5,499)],
  fn:p=>x=>{const P=p.p as number;const v=Math.floor(x);return ((v*v)%P+P)%P;},
  view:{cx:50,cy:50,scale:6},
});
