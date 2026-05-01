import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bose-einstein-occupation',title:'Bose-Einstein 占据数',domain:'quantum',level:3,tex:'\\langle n\\rangle=\\frac{1}{e^{(E-\\mu)/kT}-1}',blurb:'横轴 (E−μ)/kT。'},
  params:[],
  fn:_=>x=>x<=0?NaN:1/(Math.exp(x)-1),
  view:{cx:2,cy:1,scale:60},
});
