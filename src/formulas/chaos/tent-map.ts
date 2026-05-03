import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'tent-map',
    title: '帐篷映射',
    domain: 'chaos',
    level: 2,
    tex: 'T_\\mu(x)=\\mu\\min(x,1-x)',
    blurb: 'μ=2 时取满区间 [0,1] 出现混沌；横轴 x∈[0,1]。',
  },
  params: [n('mu', '陡度 μ', 2, 0, 2, 0.005)],
  fn: p => x => {
    if (x < 0 || x > 1) return NaN;
    return (p.mu as number) * Math.min(x, 1 - x);
  },
  view: { cx: 0.5, cy: 0.5, scale: 280 },
});
