import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'totient-density',title:'Euler 商函数比 φ(n)/n',domain:'crypto',level:3,tex:'\\varphi(n)/n=\\prod_{p|n}\\left(1-\\frac{1}{p}\\right)',blurb:'稀疏小因子使 φ(n)/n 接近 1，多小因子拉低。'},
  params:[i('span','axis',300,30,1000)],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;const N=n;let r=n;for(let p=2;p*p<=n;p++) if(n%p===0){while(n%p===0) n/=p; r-=r/p;} if(n>1) r-=r/n; return r/N;},
  view:{cx:150,cy:0.5,scale:2.5},
});
