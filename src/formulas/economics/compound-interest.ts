import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'compound-interest',
    title: '复利增长',
    domain: 'economics',
    level: 1,
    tex: 'A=P\\left(1+\\frac{r}{n}\\right)^{nt}',
    blurb: '本金 P 在年利率 r、每年复利 n 次下，t 年后价值 A。横轴 t（年）。',
  },
  params: [
    n('P', '本金 P', 1, 0.1, 5, 0.01),
    n('r', '年利率 r', 0.07, -0.05, 0.3, 0.005),
    n('n', '复利次数 n', 12, 1, 365, 1),
  ],
  fn: p => t => {
    if (t < 0) return NaN;
    const r = p.r as number;
    const nn = p.n as number;
    return (p.P as number) * Math.pow(1 + r / nn, nn * t);
  },
  view: { cx: 15, cy: 3, scale: 25 },
});
