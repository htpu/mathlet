import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'mapping-class-dim',title:'映射类群维数',domain:'topology',level:5,tex:'\\dim M_g=6g-6',blurb:'g ≥ 2 时映射类群作用空间维数。横轴 g。'},
  params:[],
  fn:_=>g=>{if(g<2)return NaN;return 6*g-6;},
  view:{cx:5,cy:25,scale:25},
});
