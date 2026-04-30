import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'schwarzschild-metric',title:'Schwarzschild 度量分量',domain:'gr',level:4,tex:'g_{tt}=-(1-r_s/r)',blurb:'引力时间膨胀因子。横轴 r/rs。'},
  params:[],
  fn:()=>x=>{if(x<=1) return NaN; return -(1-1/x);},
  view:{cx:5,cy:-0.5,scale:30},
});
