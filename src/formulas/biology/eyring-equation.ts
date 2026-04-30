import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'eyring-equation',title:'Eyring 过渡态理论',domain:'biology',level:4,tex:'k=\\frac{k_BT}{h}e^{-\\Delta G^\\ddagger/RT}',blurb:'活化自由能决定速率。'},
  params:[n('dG','ΔG‡ (kJ/mol)',60,10,200,0.1)],
  fn:p=>T=>{if(T<=0) return NaN; const kB=1.381e-23, h=6.626e-34, R=8.314e-3; return (kB*T/h)*Math.exp(-(p.dG as number)/(R*T));},
  view:{cx:300,cy:1e3,scale:0.5},
});
