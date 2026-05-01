import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'escape-velocity',title:'逃逸速度',domain:'gr',level:2,tex:'v_e=\\sqrt{\\frac{2GM}{r}}',blurb:'横轴 r (km)，固定 M。地表 11.2 km/s。'},
  params:[n('M','M (10²⁴ kg)',5.97,0.01,2000,0.01)],
  fn:p=>r=>r<=0?NaN:Math.sqrt(2*6.674e-11*(p.M as number)*1e24/(r*1e3))/1000,
  view:{cx:6500,cy:11,scale:0.05},
});
