import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'spontaneous-emission',title:'自发辐射率 Γ ∝ ω³',domain:'quantum',level:4,tex:'\\Gamma=\\frac{\\omega^3 |d|^2}{3\\pi\\varepsilon_0\\hbar c^3}',blurb:'横轴 log10 ω，纵轴 log10 Γ（单位常数 ω³）。'},
  params:[],
  fn:_=>x=>3*x,
  view:{cx:14,cy:42,scale:30},
});
