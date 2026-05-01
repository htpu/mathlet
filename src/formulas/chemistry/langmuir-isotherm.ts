import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'langmuir-isotherm', title: 'Langmuir 等温吸附', domain: 'chemistry', level: 3, tex: '\\theta=\\frac{bP}{1+bP}', blurb: '表面覆盖度 θ 随分压 P 饱和。' },
  params: [n('b','b',0.5,0.01,5,0.01)],
  fn: p => P => P<0?NaN:((p.b as number)*P)/(1+(p.b as number)*P),
  view: { cx: 0, cy: 0.5, scale: 60 },
});
