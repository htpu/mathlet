import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'relativistic-doppler',title:'相对论 Doppler',domain:'gr',level:3,tex:'\\frac{f_{obs}}{f_{src}}=\\sqrt{\\frac{1-\\beta}{1+\\beta}}',blurb:'纵向 Doppler 频移。横轴 β。'},
  params:[],
  fn:_=>b=>{if(b<=-1||b>=1)return NaN;return Math.sqrt((1-b)/(1+b));},
  view:{cx:0,cy:1,scale:200},
});
