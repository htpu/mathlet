import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'time-dilation-gr',title:'引力时间膨胀',domain:'gr',level:3,tex:'dt=d\\tau/\\sqrt{1-r_s/r}',blurb:'外部时间相对本地原时膨胀。'},
  params:[],
  fn:()=>x=>{if(x<=1) return NaN; return 1/Math.sqrt(1-1/x);},
  view:{cx:5,cy:3,scale:30},
});
