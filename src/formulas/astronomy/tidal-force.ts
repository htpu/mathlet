import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';

export default vfield2d({
  meta: {
    slug: 'tidal-force',
    title: '潮汐力场',
    domain: 'astronomy',
    level: 3,
    tex: '\\mathbf F_t\\approx\\frac{2GMr}{R^3}',
    blurb: '主星沿一轴的引力差；近端被拉、远端被推，形成两个潮汐隆起。',
  },
  params: [n('GM', 'GM', 1, 0.2, 3, 0.01), n('R', '主星距离 R', 4, 2, 8, 0.05)],
  field: p => (x, y) => {
    const GM = p.GM as number;
    const R = p.R as number;
    const fx = 2 * GM * x / (R * R * R);
    const fy = -GM * y / (R * R * R);
    return [fx, fy];
  },
  view: { cx: 0, cy: 0, scale: 30 },
  density: 16,
});
