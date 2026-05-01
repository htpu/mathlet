import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hawking-temperature',title:'Hawking 温度',domain:'gr',level:4,tex:'T_H=\\frac{\\hbar c^3}{8\\pi GM k_B}',blurb:'黑洞蒸发温度（log-log）。x=log10(M/M☉)，y=log10(T/K)。'},
  params:[],
  fn:_=>x=>{const M=Math.pow(10,x)*1.989e30;return Math.log10(6.17e-8/M*1.989e30);},
  view:{cx:5,cy:-7,scale:25},
});
