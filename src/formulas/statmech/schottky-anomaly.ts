import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'schottky-anomaly',
    title: '肖特基比热反常',
    domain: 'statmech',
    level: 3,
    tex: 'C/k_B=\\left(\\tfrac{\\Delta}{k_BT}\\right)^2\\frac{e^{\\Delta/k_BT}}{(1+e^{\\Delta/k_BT})^2}',
    blurb: '二能级系统比热在 k_BT≈0.42Δ 处出现峰值；横轴温度。',
  },
  params: [n('Delta', '能差 Δ', 1, 0.2, 4, 0.01)],
  fn: p => T => {
    if (T <= 0) return 0;
    const x = (p.Delta as number) / T;
    const ex = Math.exp(x);
    const denom = 1 + ex;
    return x * x * ex / (denom * denom);
  },
  view: { cx: 1.5, cy: 0.25, scale: 280 },
});
