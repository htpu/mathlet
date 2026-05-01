import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'eyring-rate',title:'Eyring 过渡态速率',domain:'chemistry',level:4,tex:'k=\\frac{k_BT}{h}e^{-\\Delta G^\\ddagger/RT}',blurb:'过渡态理论速率常数 (log10 k)。横轴 T(K)。'},
  params:[n('dG','ΔG‡(kJ/mol)',75,30,200,0.1)],
  fn:p=>T=>{if(T<=0)return NaN;const R=8.314e-3;const k=2.084e10*T*Math.exp(-(p.dG as number)/(R*T));return Math.log10(k);},
  view:{cx:400,cy:0,scale:0.4},
});
