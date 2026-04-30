import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'equal-temperament',title:'十二平均律',domain:'music',level:2,tex:'f_n=440\\cdot 2^{n/12}',blurb:'A4=440Hz 的等比频率。'},
  params:[],
  fn:()=>n=>440*Math.pow(2,n/12),
  view:{cx:0,cy:600,scale:30},
});
