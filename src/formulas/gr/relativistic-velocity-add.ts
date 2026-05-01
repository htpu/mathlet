import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'relativistic-velocity-add',title:'相对论速度叠加',domain:'gr',level:3,tex:'w=\\frac{u+v}{1+uv/c^2}',blurb:'两个共线速度合成。固定 u，扫 v。横轴 v/c。'},
  params:[n('u','u/c',0.5,-0.99,0.99,0.001)],
  fn:p=>v=>{const u=p.u as number;const w=(u+v)/(1+u*v);if(w>=1||w<=-1)return NaN;return w;},
  view:{cx:0,cy:0,scale:200},
});
