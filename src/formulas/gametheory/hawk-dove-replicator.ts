import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'hawk-dove-replicator',
    title: '鹰鸽博弈复制方程',
    domain: 'gametheory',
    level: 3,
    tex: '\\dot x=x(1-x)\\left[\\tfrac{V-C}{2}-\\left(\\tfrac{V-C}{2}-0\\right)x\\right]',
    blurb: '鹰策略比例 x 的演化速率；曲线穿零点为 ESS 平衡 x*=V/C。',
  },
  params: [
    n('V', '资源价值 V', 2, 0.1, 5, 0.01),
    n('C', '冲突代价 C', 4, 0.1, 8, 0.01),
  ],
  fn: p => x => {
    if (x < 0 || x > 1) return NaN;
    const V = p.V as number;
    const C = p.C as number;
    const piH = 0.5 * (V - C) * x + V * (1 - x);
    const piD = 0 * x + 0.5 * V * (1 - x);
    const avg = x * piH + (1 - x) * piD;
    return x * (piH - avg);
  },
  view: { cx: 0.5, cy: 0, scale: 280 },
});
