import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'diffie-hellman-key',title:'Diffie-Hellman 共享密钥',domain:'crypto',level:3,tex:'K=g^{ab}\\bmod p',blurb:'扫描指数 a，B=g^b 固定 → 共享密钥 g^{ab} 周期分布。'},
  params:[i('g','g',5,2,30),i('p','p',97,5,997),i('b','b',7,1,300)],
  fn:p=>x=>{const g=p.g as number,P=p.p as number,b=p.b as number;const a=Math.floor(x);if(a<0)return NaN;const B=modpow(g,b,P);return modpow(B,a,P);},
  view:{cx:50,cy:50,scale:5},
});
function modpow(b:number,e:number,m:number){let r=1;b%=m;while(e>0){if(e&1)r=(r*b)%m;b=(b*b)%m;e=Math.floor(e/2);}return r;}
