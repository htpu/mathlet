import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fermi-dirac',title:'费米-狄拉克分布',domain:'algebra',level:3,tex:'f(E)=\\frac{1}{e^{(E-\\mu)/kT}+1}',blurb:'电子等费米子占据率。横轴 (E-μ)/kT。'},
  params:[n('mu','μ',0,-3,3,0.01)],
  fn:p=>x=>1/(Math.exp(x-(p.mu as number))+1),
  view:{cx:0,cy:0.5,scale:80},
});
