import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'prime-counting',title:'素数定理 π(x) ≈ x/ln(x)',domain:'crypto',level:3,tex:'\\pi(x)\\sim x/\\ln x',blurb:'渐近素数分布。'},
  params:[],
  fn:()=>x=>{if(x<=1) return NaN; return x/Math.log(x);},
  view:{cx:500,cy:80,scale:0.5},
});
