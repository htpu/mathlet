import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'unruh-temperature',title:'Unruh 温度',domain:'gr',level:4,tex:'T=\\frac{\\hbar a}{2\\pi c k_B}',blurb:'匀加速观察者感受的真空温度。横轴 a (m/s²)。'},
  params:[],
  fn:_=>a=>a<=0?NaN:4.06e-21*a,
  view:{cx:5e20,cy:1,scale:1e-20},
});
