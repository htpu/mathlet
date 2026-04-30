import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'qho-energy-levels',title:'谐振子能级',domain:'quantum',level:2,tex:'E_n=\\hbar\\omega(n+1/2)',blurb:'等距能级阶梯。横轴 n。'},
  params:[],
  fn:()=>n=>{if(n<0) return NaN; return n+0.5;},
  view:{cx:5,cy:5,scale:30},
});
