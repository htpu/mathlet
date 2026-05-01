import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'relativistic-momentum',title:'相对论动量',domain:'gr',level:2,tex:'p=\\gamma m v',blurb:'横轴 β = v/c，纵轴 p/(mc)。'},
  params:[],
  fn:_=>b=>{if(Math.abs(b)>=1)return NaN;return b/Math.sqrt(1-b*b);},
  view:{cx:0,cy:5,scale:200},
});
