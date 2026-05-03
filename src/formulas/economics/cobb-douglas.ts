import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'cobb-douglas',
    title: 'Cobb-Douglas 生产函数',
    domain: 'economics',
    level: 2,
    tex: 'Y=A K^{\\alpha} L^{1-\\alpha}',
    blurb: '产出 Y 关于资本 K 的边际递减；劳动 L 固定。横轴 K。',
  },
  params: [
    n('A', '全要素生产率 A', 1, 0.2, 3, 0.01),
    n('alpha', '资本份额 α', 0.35, 0.05, 0.95, 0.01),
    n('L', '劳动 L', 1, 0.1, 5, 0.05),
  ],
  fn: p => K => {
    if (K < 0) return NaN;
    const a = p.alpha as number;
    return (p.A as number) * Math.pow(K, a) * Math.pow(p.L as number, 1 - a);
  },
  view: { cx: 5, cy: 2, scale: 60 },
});
