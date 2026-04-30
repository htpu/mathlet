import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'light-deflection',title:'光线引力偏折',domain:'gr',level:4,tex:'\\alpha=4GM/(bc^2)',blurb:'光绕过质量 M，偏折角 ∝ 1/b。'},
  params:[],
  fn:()=>b=>{if(b<=0) return NaN; return 4/b;},
  view:{cx:5,cy:1,scale:40},
});
