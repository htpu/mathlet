import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'four-momentum-shell',title:'相对论能量壳',domain:'gr',level:3,tex:'E^2=(pc)^2+(mc^2)^2',blurb:'E vs p (单位 mc²)。p=0 时 E=mc²，p→∞ 时 E≈pc。'},
  params:[],
  fn:_=>p=>Math.sqrt(p*p+1),
  view:{cx:0,cy:2,scale:80},
});
