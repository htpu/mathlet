import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'sat-phase-transition',
    title: '3-SAT 相变',
    domain: 'logic',
    level: 4,
    tex: 'P_{\\mathrm{sat}}(\\alpha)\\to\\Theta(\\alpha_c-\\alpha),\\ \\alpha_c\\approx 4.267',
    blurb: '随机 3-SAT 子句/变量比 α 越过 4.267 处可满足概率骤降；用 logistic 近似。',
  },
  params: [n('w', '过渡宽度', 0.3, 0.05, 1.5, 0.005)],
  fn: p => alpha => 1 / (1 + Math.exp((alpha - 4.267) / (p.w as number))),
  view: { cx: 4.2, cy: 0.5, scale: 110 },
});
