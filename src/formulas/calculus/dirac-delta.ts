import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'dirac-delta',title:'Dirac δ（高斯近似）',domain:'calculus',level:3,tex:'\\delta_\\epsilon(x)=\\frac{1}{\\epsilon\\sqrt\\pi}e^{-x^2/\\epsilon^2}',blurb:'宽度 ε→0 时趋于 δ。'},
  params:[n('eps','ε',0.3,0.01,2,0.005,true)],
  fn:p=>x=>Math.exp(-x*x/((p.eps as number)**2))/((p.eps as number)*Math.sqrt(Math.PI)),
  view:{cx:0,cy:1.5,scale:60},
});
