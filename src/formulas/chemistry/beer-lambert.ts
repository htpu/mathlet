import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'beer-lambert', title: 'Beer–Lambert 定律', domain: 'chemistry', level: 2, tex: 'A=\\varepsilon c l', blurb: '吸光度随浓度线性增长。横轴浓度 c。' },
  params: [n('eps','ε(L mol⁻¹ cm⁻¹)',5000,100,1e5,1,true), n('l','l(cm)',1,0.1,10,0.01)],
  fn: p => c => (p.eps as number)*c*(p.l as number),
  view: { cx: 0, cy: 0, scale: 5e4 },
});
