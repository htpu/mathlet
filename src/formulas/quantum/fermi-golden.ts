import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fermi-golden',title:'费米黄金法则',domain:'quantum',level:4,tex:'\\Gamma=\\frac{2\\pi}{\\hbar}|\\langle f|H_1|i\\rangle|^2\\rho(E_f)',blurb:'跃迁速率 ∝ 矩阵元² × 终态密度。'},
  params:[n('M','|<f|H1|i>|',1,0.1,5,0.01)],
  fn:p=>x=>{const M=p.M as number; return 2*Math.PI*M*M*x;},
  view:{cx:5,cy:30,scale:30},
});
