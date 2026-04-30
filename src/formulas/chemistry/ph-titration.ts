import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'ph-titration', title: '酸碱滴定曲线', domain: 'chemistry', level: 3, tex: '\\text{pH vs V_{base}/V_{eq}}', blurb: '弱酸-强碱滴定的 sigmoid pH 曲线。' },
  params: [n('pKa', 'pKa', 4.76, 1, 14, 0.01)],
  fn: p => x => {
    if (x <= 0) return 1; if (x >= 2) return 13;
    const pKa = p.pKa as number;
    if (Math.abs(x - 1) < 0.001) return 7 + (pKa - 7) * 0.5;
    if (x < 1) return pKa + Math.log10(x / (1 - x));
    return 14 + Math.log10((x - 1) * 0.05 / 0.1);
  },
  view: { cx: 1, cy: 7, scale: 80 },
});
