import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'nernst-equation', title: 'Nernst 方程', domain: 'chemistry', level: 3, tex: 'E=E^\\circ-\\frac{RT}{nF}\\ln Q', blurb: '电池电动势随反应商 Q 变化。横轴 ln Q。' },
  params: [n('E0','E°(V)',1.10,-1,2,0.01), i('n','n e⁻',2,1,4), n('T','T(K)',298,250,400,1)],
  fn: p => x => (p.E0 as number) - (8.314*(p.T as number))/((p.n as number)*96485)*x,
  view: { cx: 0, cy: 1, scale: 80 },
});
