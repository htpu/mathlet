import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'mertens-prime-harmonic',title:'Σ 1/p (素数调和和)',domain:'numbertheory',level:4,tex:'\\sum_{p\\le n}\\frac{1}{p}\\sim\\ln\\ln n+M',blurb:'Mertens 第二定理：素数倒数和缓慢发散。横轴 n。'},
  params:[],
  fn:_=>n=>{const N=Math.floor(n);if(N<2)return 0;const s=new Uint8Array(N+1);for(let i=2;i*i<=N;i++) if(!s[i]) for(let j=i*i;j<=N;j+=i) s[j]=1;let r=0;for(let i=2;i<=N;i++) if(!s[i]) r+=1/i;return r;},
  view:{cx:500,cy:2,scale:0.9},
});
