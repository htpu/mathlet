import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'omega-prime-count',title:'ω(n) 不同素因子数',domain:'numbertheory',level:3,tex:'\\omega(n)=\\#\\{p:p\\mid n\\}',blurb:'按 Erdős-Kac 渐近 ω(n) ≈ ln ln n。横轴 n。'},
  params:[],
  fn:_=>x=>{let n=Math.floor(x);if(n<1)return NaN;let cnt=0;for(let p=2;p*p<=n;p++) if(n%p===0){cnt++;while(n%p===0) n/=p;}if(n>1) cnt++;return cnt;},
  view:{cx:60,cy:2,scale:6},
});
