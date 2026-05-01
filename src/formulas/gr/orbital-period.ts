import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'orbital-period',title:'Kepler 第三定律 T(a)',domain:'gr',level:2,tex:'T^2=\\frac{4\\pi^2}{GM}a^3',blurb:'轨道周期 T 随半长轴 a^{3/2}。横轴 a (AU)，纵轴 T (年)。'},
  params:[n('M','M (太阳)',1,0.01,30,0.01)],
  fn:p=>a=>a<=0?NaN:Math.pow(a*a*a/(p.M as number),0.5),
  view:{cx:5,cy:5,scale:30},
});
