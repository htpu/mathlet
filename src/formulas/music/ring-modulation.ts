import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'ring-modulation',title:'环形调制',domain:'music',level:3,tex:'y(t)=\\sin(2\\pi f_c t)\\cdot\\sin(2\\pi f_m t)',blurb:'载波×调制波 → 和频与差频。横轴时间 t。'},
  params:[n('fc','fc(Hz)',8,1,40,0.1),n('fm','fm(Hz)',1,0.1,10,0.01)],
  fn:p=>t=>Math.sin(2*Math.PI*(p.fc as number)*t)*Math.sin(2*Math.PI*(p.fm as number)*t),
  view:{cx:0,cy:0,scale:120},
});
