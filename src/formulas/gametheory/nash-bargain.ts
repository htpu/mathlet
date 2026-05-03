import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'nash-bargain',
    title: 'Nash 谈判积',
    domain: 'gametheory',
    level: 2,
    tex: '\\max_{u_1+u_2=S}(u_1-d_1)^{\\alpha}(u_2-d_2)^{1-\\alpha}',
    blurb: '剩余 S 的两方分配；Nash 解最大化加权效用积。横轴 u_1 份额。',
  },
  params: [
    n('S', '剩余 S', 1, 0.2, 2, 0.01),
    n('alpha', '权重 α', 0.5, 0.05, 0.95, 0.01),
    n('d1', '威胁点 d_1', 0, 0, 0.5, 0.005),
    n('d2', '威胁点 d_2', 0, 0, 0.5, 0.005),
  ],
  fn: p => x => {
    const S = p.S as number;
    const a = p.alpha as number;
    const d1 = p.d1 as number;
    const d2 = p.d2 as number;
    const u1 = x;
    const u2 = S - x;
    if (u1 < d1 || u2 < d2) return 0;
    return Math.pow(u1 - d1, a) * Math.pow(u2 - d2, 1 - a);
  },
  view: { cx: 1, cy: 0.4, scale: 200 },
});
