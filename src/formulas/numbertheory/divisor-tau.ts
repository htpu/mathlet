import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'divisor-tau',title:'除数函数 d(n)',domain:'numbertheory',level:3,tex:'d(n)=\\sum_{d|n}1',blurb:'n 的除数个数。横轴 n。'},
  params:[],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;let r=1;for(let p=2;p*p<=n;p++){let e=0;while(n%p===0){n/=p;e++;}r*=e+1;}if(n>1) r*=2;return r;},
  view:{cx:60,cy:5,scale:6},
});
