import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'euler-phi',title:'Euler φ(n)',domain:'crypto',level:2,tex:'\\varphi(n)=n\\prod_{p|n}\\left(1-\\frac{1}{p}\\right)',blurb:'与 n 互素的整数个数。RSA 密钥生成核心。'},
  params:[i('span','axis',200,30,1000)],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;let r=n;for(let p=2;p*p<=n;p++) if(n%p===0){while(n%p===0) n/=p; r-=r/p;} if(n>1) r-=r/n; return r;},
  view:{cx:100,cy:50,scale:3},
});
