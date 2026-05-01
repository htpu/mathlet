import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'henderson-hasselbalch', title: 'Henderson-Hasselbalch', domain: 'chemistry', level: 2, tex: 'pH=pK_a+\\log\\frac{[A^-]}{[HA]}', blurb: '缓冲溶液 pH。横轴为比值 [A⁻]/[HA] 的对数。' },
  params: [n('pKa','pKa',4.76,1,14,0.01)],
  fn: p => x => (p.pKa as number) + x,
  view: { cx: 0, cy: 7, scale: 30 },
});
