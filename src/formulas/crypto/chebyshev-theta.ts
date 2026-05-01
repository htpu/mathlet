import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'chebyshev-theta',title:'Chebyshev θ(x) = Σ log p',domain:'crypto',level:4,tex:'\\theta(x)=\\sum_{p\\le x}\\log p\\sim x',blurb:'素数对数累积函数渐近 x。横轴 x。'},
  params:[],
  fn:_=>x=>{const N=Math.floor(x);if(N<2)return 0;const sieve=new Uint8Array(N+1);for(let i=2;i*i<=N;i++) if(!sieve[i]) for(let j=i*i;j<=N;j+=i) sieve[j]=1;let s=0;for(let i=2;i<=N;i++) if(!sieve[i]) s+=Math.log(i);return s;},
  view:{cx:500,cy:500,scale:0.6},
});
