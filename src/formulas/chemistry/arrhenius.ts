import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'chem-arrhenius', title: 'Arrhenius 反应速率 (化学)', domain: 'chemistry', level: 2, tex: 'k=A e^{-E_a/RT}', blurb: '温度对反应速率的指数依赖。横轴 T (K)。' },
  params: [n('A', 'A', 1e10, 1e6, 1e14, 1, true), n('Ea', 'Ea (kJ/mol)', 75, 10, 250, 0.1)],
  fn: p => T => { const R = 8.314e-3; if (T <= 0) return NaN; return (p.A as number) * Math.exp(-(p.Ea as number) / (R * T)); },
  view: { cx: 350, cy: 1, scale: 0.6 },
});
