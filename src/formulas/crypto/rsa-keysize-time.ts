import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rsa-keysize-time',title:'RSA 破解时间增长',domain:'crypto',level:3,tex:'T\\sim e^{c(n\\log n)^{1/3}}',blurb:'GNFS 子指数复杂度。横轴位长 n。'},
  params:[],
  fn:()=>n=>{if(n<=0) return NaN; return Math.exp(1.92*Math.pow(n*Math.log(Math.max(2,n)),1/3));},
  view:{cx:1500,cy:1e10,scale:0.2},
});
