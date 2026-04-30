import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'boltzmann-folding',title:'蛋白折叠热分布',domain:'biology',level:3,tex:'f_F=\\frac{1}{1+e^{\\Delta G/RT}}',blurb:'随温度变化的折叠分数。'},
  params:[n('dH','ΔH (kJ/mol)',300,50,800,0.1),n('Tm','Tm (K)',335,300,400,0.1)],
  fn:p=>T=>{const dG=(p.dH as number)*(1-T/(p.Tm as number)); const R=8.314e-3; return 1/(1+Math.exp(dG/(R*T)));},
  view:{cx:335,cy:0.5,scale:5},
});
