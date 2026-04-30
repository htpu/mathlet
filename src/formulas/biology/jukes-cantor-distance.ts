import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'jukes-cantor-distance',title:'Jukes-Cantor 距离',domain:'biology',level:3,tex:'d=-\\frac{3}{4}\\ln(1-\\frac{4}{3}p)',blurb:'同时取代修正后的进化距离。'},
  params:[],
  fn:()=>p=>{if(p<0||p>=0.75) return NaN; return -0.75*Math.log(1-4*p/3);},
  view:{cx:0.4,cy:1,scale:300},
});
