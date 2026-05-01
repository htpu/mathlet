import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function mu(n:number){if(n===1)return 1;let m=n;let cnt=0;for(let p=2;p*p<=m;p++){if(m%p===0){let pk=0;while(m%p===0){m=m/p;pk++;}if(pk>1)return 0;cnt++;}}if(m>1) cnt++;return cnt%2===0?1:-1;}
export default fn1d({
  meta:{slug:'mertens-mu',title:'Mertens M(x) = Σ μ(n)',domain:'crypto',level:5,tex:'M(x)=\\sum_{n\\le x}\\mu(n)',blurb:'Möbius 累积。Mertens 猜想 |M(x)| ≤ √x。'},
  params:[],
  fn:_=>x=>{const N=Math.floor(x);if(N<1)return 0;let s=0;for(let i=1;i<=N;i++) s+=mu(i);return s;},
  view:{cx:400,cy:0,scale:0.8},
});
