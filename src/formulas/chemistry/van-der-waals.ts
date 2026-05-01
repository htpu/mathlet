import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta: { slug: 'van-der-waals', title: 'van der Waals 气体等温线', domain: 'chemistry', level: 3, tex: '\\left(P+\\frac{an^2}{V^2}\\right)(V-nb)=nRT', blurb: '非理想气体 P-V 等温线。横轴 V(L)，固定 T。' },
  params: [n('a','a',1.36,0,10,0.01), n('b','b',0.0318,0,0.5,0.001), n('T','T(K)',300,200,500,1)],
  fn: p => V => { if(V<=(p.b as number)) return NaN; const R=0.08314; return R*(p.T as number)/(V-(p.b as number)) - (p.a as number)/(V*V); },
  view: { cx: 0.5, cy: 30, scale: 80 },
});
