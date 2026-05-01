import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'equilibrium-keq',title:'平衡常数温度依赖 (van’t Hoff)',domain:'chemistry',level:3,tex:'\\ln K=-\\frac{\\Delta H^\\circ}{RT}+\\frac{\\Delta S^\\circ}{R}',blurb:'平衡常数 K 随温度变化（van’t Hoff 方程）。横轴 1/T。'},
  params:[n('dH','ΔH(kJ/mol)',-50,-200,200,0.5),n('dS','ΔS(J/mol·K)',-50,-300,300,0.5)],
  fn:p=>x=>{const R=8.314;return -(p.dH as number)*1000*x/R+(p.dS as number)/R;},
  view:{cx:0.003,cy:0,scale:30000},
});
