import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lorentz-transform',title:'洛伦兹收缩',domain:'gr',level:2,tex:'L=L_0\\sqrt{1-v^2/c^2}',blurb:'运动方向长度收缩。横轴 β。'},
  params:[],
  fn:()=>x=>{if(Math.abs(x)>=1) return 0; return Math.sqrt(1-x*x);},
  view:{cx:0,cy:0.5,scale:200},
});
