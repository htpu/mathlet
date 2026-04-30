import { fn1d } from '../../templates/fn1d';
const just=[1,16/15,9/8,6/5,5/4,4/3,45/32,3/2,8/5,5/3,9/5,15/8];
export default fn1d({
  meta:{slug:'just-vs-equal',title:'纯律 vs 平均律 (cents 差)',domain:'music',level:3,tex:'\\text{cents}=1200\\log_2(r/2^{n/12})',blurb:'各音级的频率偏差。'},
  params:[],
  fn:()=>x=>{const n=Math.round(x); if(n<0||n>=12) return NaN; return 1200*Math.log2(just[n]/Math.pow(2,n/12));},
  view:{cx:5.5,cy:0,scale:30},
});
