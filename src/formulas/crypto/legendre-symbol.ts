import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'legendre-symbol',title:'Legendre 符号 (a/p)',domain:'crypto',level:3,tex:'\\left(\\frac{a}{p}\\right)=a^{(p-1)/2}\\bmod p',blurb:'± 1 表示 a 是否模 p 的二次剩余。横轴 a。'},
  params:[i('p','p (素数)',23,3,499)],
  fn:p=>x=>{const P=p.p as number;const a=Math.floor(x);if(a<=0)return NaN;if(a%P===0)return 0;const r=modpow(a,(P-1)/2,P);return r===P-1?-1:r;},
  view:{cx:50,cy:0,scale:6},
});
function modpow(b:number,e:number,m:number){let r=1;b%=m;while(e>0){if(e&1)r=(r*b)%m;b=(b*b)%m;e=Math.floor(e/2);}return r;}
