import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'perihelion-precession',title:'近日点进动',domain:'gr',level:4,tex:'\\Delta\\varphi=\\frac{6\\pi GM}{c^2 a(1-e^2)}',blurb:'相对论近日点每轨道进动角。横轴半长轴 a (AU)。'},
  params:[n('e','e',0.2,0,0.95,0.001),n('M','M (太阳)',1,0.1,10,0.01)],
  fn:p=>a=>a<=0?NaN:6*Math.PI*1.48e3*(p.M as number)/(a*1.5e11*(1-(p.e as number)*(p.e as number)))*206265,
  view:{cx:0.5,cy:0,scale:300},
});
