import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'doppler-effect',title:'多普勒效应',domain:'algebra',level:2,tex:'f\'=f\\frac{c+v_o}{c-v_s}',blurb:'声波频率随相对速度变化。横轴 v_s/c。'},
  params:[n('f','源频率 f₀ (Hz)',440,100,1000,1),n('vo','vo/c',0,-0.5,0.5,0.01)],
  fn:p=>x=>{const vs=x;return (p.f as number)*(1+(p.vo as number))/(1-vs);},
  view:{cx:0,cy:600,scale:300},
});
