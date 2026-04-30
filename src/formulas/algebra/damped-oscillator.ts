import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'damped-oscillator',title:'阻尼振子',domain:'algebra',level:2,tex:'x(t)=A e^{-\\gamma t}\\cos(\\omega t+\\phi)',blurb:'指数包络下的振荡，γ 控阻尼。'},
  params:[n('gamma','γ',0.3,0,2,0.01),n('omega','ω',6,0.5,15,0.01),n('phi','φ',0,-3.14,3.14,0.01)],
  fn:p=>t=>Math.exp(-(p.gamma as number)*t)*Math.cos((p.omega as number)*t+(p.phi as number)),
  view:{cx:5,cy:0,scale:50},
});
