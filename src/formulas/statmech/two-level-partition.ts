import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'two-level-partition',
    title: '二能级配分函数',
    domain: 'statmech',
    level: 2,
    tex: 'Z(T)=1+e^{-\\Delta/k_BT}',
    blurb: '两个能级 0 和 Δ 的玻尔兹曼配分函数；横轴温度 k_BT。',
  },
  params: [n('Delta', '能差 Δ', 1, 0.1, 5, 0.01)],
  fn: p => T => {
    if (T <= 0) return 1;
    return 1 + Math.exp(-(p.Delta as number) / T);
  },
  view: { cx: 2.5, cy: 1.5, scale: 80 },
});
