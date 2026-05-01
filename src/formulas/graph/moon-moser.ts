import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'moon-moser',title:'Moon-Moser 极大独立集数',domain:'graph',level:5,tex:'\\#\\text{MIS}\\le 3^{n/3}',blurb:'n 节点图最大独立集数（log10）。'},
  params:[],
  fn:_=>n=>n<0?NaN:n/3*Math.log10(3),
  view:{cx:30,cy:5,scale:8},
});
