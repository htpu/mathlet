import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'tidal-acceleration',title:'潮汐加速度',domain:'gr',level:3,tex:'a_{tidal}\\approx\\frac{2GM r}{d^3}',blurb:'距 d 处尺度 r 的物体潮汐加速度。横轴 d (km)。'},
  params:[n('M','M (10²⁴ kg)',7.35,0.01,2000,0.01),n('r','r (m)',1,0.1,100,0.01)],
  fn:p=>d=>d<=0?NaN:2*6.674e-11*(p.M as number)*1e24*(p.r as number)/Math.pow(d*1e3,3),
  view:{cx:3.84e5,cy:1e-7,scale:1e-3},
});
