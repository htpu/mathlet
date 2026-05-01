import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'pisano-period',title:'Pisano 周期 π(m)',domain:'crypto',level:3,tex:'F_n\\bmod m\\text{ has period }\\pi(m)',blurb:'Fibonacci 模 m 序列周期，密码学 PRNG 重要参考。横轴 m。'},
  params:[],
  fn:_=>x=>{const m=Math.floor(x);if(m<2)return NaN;let a=0,b=1;for(let i=1;i<m*m+10;i++){const c=(a+b)%m;a=b;b=c;if(a===0&&b===1) return i;}return NaN;},
  view:{cx:50,cy:50,scale:6},
});
