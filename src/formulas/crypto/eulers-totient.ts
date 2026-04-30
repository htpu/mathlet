import { fn1d } from '../../templates/fn1d';
function phi(n:number):number{let r=n; for(let p=2;p*p<=n;p++) if(n%p===0){while(n%p===0) n/=p; r-=r/p;} if(n>1) r-=r/n; return Math.round(r);}
export default fn1d({
  meta:{slug:'eulers-totient',title:'欧拉函数 φ(n)',domain:'crypto',level:3,tex:'\\varphi(n)=|\\{k\\leq n: \\gcd(k,n)=1\\}|',blurb:'RSA 密钥生成的核心。'},
  params:[],
  fn:()=>n=>{if(n<1) return NaN; return phi(Math.round(n));},
  view:{cx:50,cy:25,scale:5},
});
