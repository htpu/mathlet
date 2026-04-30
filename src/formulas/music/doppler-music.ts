import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'doppler-music',title:'多普勒音高变化',domain:'music',level:2,tex:'f\'=f(c\\pm v_o)/(c\\mp v_s)',blurb:'救护车音调高低。横轴 vs/c。'},
  params:[n('f','f0 (Hz)',440,100,1000,0.1)],
  fn:p=>x=>(p.f as number)*1/(1-x),
  view:{cx:0,cy:600,scale:300},
});
