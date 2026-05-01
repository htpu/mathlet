import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'liouville-lambda',title:'Liouville λ(n) = (−1)^Ω(n)',domain:'numbertheory',level:4,tex:'\\lambda(n)=(-1)^{\\Omega(n)}',blurb:'按素因子重数计的 ±1 函数。横轴 n。'},
  params:[],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;let cnt=0;for(let p=2;p*p<=n;p++){while(n%p===0){n/=p;cnt++;}}if(n>1) cnt++;return cnt%2===0?1:-1;},
  view:{cx:50,cy:0,scale:6},
});
