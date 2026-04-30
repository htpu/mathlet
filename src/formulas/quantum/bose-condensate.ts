import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bose-condensate',title:'BEC 凝聚分数',domain:'quantum',level:4,tex:'N_0/N=1-(T/T_c)^{3/2}',blurb:'低于 Tc，凝聚态出现。横轴 T/Tc。'},
  params:[],
  fn:()=>x=>{if(x<0) return 0; if(x>=1) return 0; return 1-Math.pow(x,1.5);},
  view:{cx:0.5,cy:0.5,scale:300},
});
