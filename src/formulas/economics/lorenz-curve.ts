import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'lorenz-curve',
    title: '洛伦兹曲线 / 基尼系数',
    domain: 'economics',
    level: 2,
    tex: 'L(x)=x^{\\beta},\\ G=\\frac{\\beta-1}{\\beta+1}',
    blurb: '人口下 x 比例占有的累计收入 L(x)。β=1 完全平等，β 越大越不均。',
  },
  params: [n('beta', '不均度 β', 2, 1, 8, 0.05)],
  fns: [
    { color: 'rgba(180,180,180,0.5)', fn: () => x => Math.max(0, Math.min(1, x)) },
    {
      color: '#ffb454',
      fn: p => x => {
        if (x < 0) return 0;
        if (x > 1) return 1;
        return Math.pow(x, p.beta as number);
      },
    },
  ],
  view: { cx: 0.5, cy: 0.5, scale: 280 },
});
