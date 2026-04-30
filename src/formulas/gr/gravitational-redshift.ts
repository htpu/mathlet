import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gravitational-redshift',title:'引力红移',domain:'gr',level:3,tex:'\\Delta f/f=1-\\sqrt{1-r_s/r}',blurb:'光线逃离引力井损失能量。'},
  params:[],
  fn:()=>x=>{if(x<=1) return NaN; return 1-Math.sqrt(1-1/x);},
  view:{cx:5,cy:0.3,scale:30},
});
