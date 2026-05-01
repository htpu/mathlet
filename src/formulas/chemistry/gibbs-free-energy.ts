import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'gibbs-free-energy', title: 'Gibbs 自由能', domain: 'chemistry', level: 2, tex: '\\Delta G=\\Delta H-T\\Delta S', blurb: 'ΔG=0 时反应平衡温度 T = ΔH/ΔS。横轴 T(K)。' },
  params: [n('dH','ΔH(kJ/mol)',-50,-200,200,0.5), n('dS','ΔS(J/mol·K)',100,-300,300,0.5)],
  fn: p => T => (p.dH as number)*1000 - T*(p.dS as number),
  view: { cx: 300, cy: 0, scale: 0.6 },
});
