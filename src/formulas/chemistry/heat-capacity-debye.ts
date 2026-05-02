import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'heat-capacity-debye',title:'Debye 热容近似',domain:'chemistry',level:4,tex:'C_V/3R\\to(T/\\Theta_D)^3\\text{ at low }T',blurb:'低温 Debye T³ 极限简化。横轴 T/ΘD。'},
  params:[],
  fn:_=>x=>{if(x<=0)return 0;return Math.min(1,x*x*x*5);},
  view:{cx:0.5,cy:0.5,scale:300},
});
