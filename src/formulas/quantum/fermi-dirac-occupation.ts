import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fermi-dirac-occupation',title:'Fermi-Dirac 占据数',domain:'quantum',level:3,tex:'f(E)=\\frac{1}{e^{(E-\\mu)/kT}+1}',blurb:'电子在能级 E 上的占据概率。横轴 (E−μ)/kT。'},
  params:[],
  fn:_=>x=>1/(Math.exp(x)+1),
  view:{cx:0,cy:0.5,scale:40},
});
