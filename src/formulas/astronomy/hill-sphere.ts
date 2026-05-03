import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'hill-sphere',
    title: '希尔球半径',
    domain: 'astronomy',
    level: 2,
    tex: 'R_H=a\\left(\\frac{m}{3M}\\right)^{1/3}',
    blurb: '行星引力主导卫星运动的范围；横轴质量比 m/M。',
  },
  params: [n('a', '半长轴 a', 5, 1, 10, 0.05)],
  fn: p => x => {
    const ratio = Math.max(x, 1e-6);
    return (p.a as number) * Math.pow(ratio / 3, 1 / 3);
  },
  view: { cx: 0.05, cy: 1.5, scale: 800 },
});
