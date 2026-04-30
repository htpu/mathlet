import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'heisenberg-uncertainty',title:'海森堡不确定原理',domain:'quantum',level:2,tex:'\\Delta x\\Delta p\\geq\\hbar/2',blurb:'σx σp 下界。横轴 σx, 纵轴 σp_min。'},
  params:[],
  fn:()=>x=>{if(x<=0) return NaN; return 0.5/x;},
  view:{cx:2,cy:2,scale:80},
});
