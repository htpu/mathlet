import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'modular-exponentiation',title:'模幂 g^x mod p',domain:'crypto',level:3,tex:'y=g^x\\bmod p',blurb:'离散对数难题底层运算。横轴指数 x，纵轴 g^x mod p。'},
  params:[i('g','g',5,2,30),i('p','p (素数)',97,5,997)],
  fn:p=>x=>{const g=p.g as number,P=p.p as number;let y=1,e=Math.floor(x);if(e<0)return NaN;for(let i=0;i<e;i++) y=(y*g)%P;return y;},
  view:{cx:50,cy:50,scale:5},
});
