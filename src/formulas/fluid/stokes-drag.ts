import { n } from '../types';
import { fn1d } from '../../templates/fn1d';

export default fn1d({
  meta: {
    slug: 'stokes-drag',
    title: '斯托克斯阻力',
    domain: 'fluid',
    level: 2,
    tex: 'F=6\\pi\\eta r v',
    blurb: '低雷诺数小球受到的粘滞阻力与速度成正比；横轴速度 v。',
  },
  params: [
    n('eta', '粘度 η', 1, 0.1, 5, 0.01),
    n('r', '半径 r', 1, 0.1, 3, 0.01),
  ],
  fn: p => v => 6 * Math.PI * (p.eta as number) * (p.r as number) * v,
  view: { cx: 1, cy: 20, scale: 8 },
});
