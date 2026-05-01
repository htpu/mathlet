import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'saha-equation',title:'Saha 电离方程',domain:'chemistry',level:5,tex:'\\frac{n_+ n_e}{n_0}=\\frac{(2\\pi m_e kT)^{3/2}}{h^3}\\frac{2g_+}{g_0}e^{-\\chi/kT}',blurb:'恒星气体电离度与温度的关系（log10 比值）。横轴 T(K)。'},
  params:[n('chi','χ(eV)',13.6,1,30,0.01)],
  fn:p=>T=>{if(T<=0)return NaN;const k=8.617e-5;return Math.log10(2.4e21*Math.pow(T,1.5)*Math.exp(-(p.chi as number)/(k*T)));},
  view:{cx:1e4,cy:0,scale:0.02},
});
