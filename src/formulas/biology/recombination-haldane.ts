import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'recombination-haldane',title:'Haldane 遗传图距',domain:'biology',level:3,tex:'d=-\\frac{1}{2}\\ln(1-2r)',blurb:'重组率→图距 cM。横轴 r。'},
  params:[],
  fn:()=>r=>{if(r<0||r>=0.5) return NaN; return -0.5*Math.log(1-2*r)*100;},
  view:{cx:0.25,cy:50,scale:600},
});
