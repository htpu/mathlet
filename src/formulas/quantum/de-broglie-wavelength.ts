import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'de-broglie-wavelength',title:'de Broglie 波长',domain:'quantum',level:2,tex:'\\lambda=\\frac{h}{p}',blurb:'物质波波长随动量倒数。横轴 p (kg·m/s)。'},
  params:[n('span','axis',1e-23,1e-26,1e-22,1e-26,true)],
  fn:_=>p=>p<=0?NaN:6.626e-34/p,
  view:{cx:5e-24,cy:1e-10,scale:1e34},
});
