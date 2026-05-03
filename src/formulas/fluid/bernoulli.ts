import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'bernoulli',
    title: '伯努利方程',
    domain: 'fluid',
    level: 2,
    tex: 'P+\\tfrac12\\rho v^2+\\rho g h=\\mathrm{const}',
    blurb: '不可压缩无粘流体沿流线总能量守恒；横轴速度 v，纵轴压强 P。',
  },
  params: [
    n('P0', '总压 P_0', 5, 1, 10, 0.05),
    n('rho', '密度 ρ', 1, 0.1, 5, 0.01),
  ],
  fn: p => v => (p.P0 as number) - 0.5 * (p.rho as number) * v * v,
  view: { cx: 0, cy: 2, scale: 50 },
});
