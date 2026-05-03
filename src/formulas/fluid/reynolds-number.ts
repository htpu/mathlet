import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'reynolds-number',
    title: '雷诺数',
    domain: 'fluid',
    level: 2,
    tex: 'Re=\\frac{\\rho v L}{\\mu}',
    blurb: '惯性力 / 粘性力的比值；Re≈2300 起圆管层流转湍流。横轴速度 v。',
  },
  params: [
    n('rho', '密度 ρ', 1000, 1, 2000, 1),
    n('L', '特征长度 L', 0.05, 0.001, 0.5, 0.001),
    n('mu', '动力粘度 μ', 0.001, 1e-5, 0.1, 1e-5, true),
  ],
  fn: p => v => {
    if (v <= 0) return 0;
    return (p.rho as number) * v * (p.L as number) / (p.mu as number);
  },
  view: { cx: 1, cy: 4000, scale: 0.04 },
});
