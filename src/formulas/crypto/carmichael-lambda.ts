import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function gcd(a:number,b:number){while(b){[a,b]=[b,a%b];}return a;}
function lcm(a:number,b:number){return a/gcd(a,b)*b;}
function lambda(n:number){if(n<2)return 0;let r=1;let m=n;for(let p=2;p*p<=m;p++){if(m%p===0){let pk=1;while(m%p===0){m=m/p;pk*=p;}let l=pk-pk/p;if(p===2&&pk>=8) l=l/2;r=lcm(r,l);}}if(m>1) r=lcm(r,m-1);return r;}
export default fn1d({
  meta:{slug:'carmichael-lambda',title:'Carmichael λ(n)',domain:'crypto',level:4,tex:'\\lambda(n)=\\mathrm{lcm}\\{\\text{ord}_n(a):\\gcd(a,n)=1\\}',blurb:'群指数函数。RSA 私钥可用 λ(n) 替代 φ(n)。横轴 n。'},
  params:[i('span','axis',300,30,1000)],
  fn:_=>x=>{const n=Math.floor(x);if(n<1)return NaN;return lambda(n);},
  view:{cx:150,cy:80,scale:2.5},
});
