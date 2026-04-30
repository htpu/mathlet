import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lineweaver-burk',title:'Lineweaver-Burk 双倒数图',domain:'biology',level:3,tex:'\\frac{1}{v}=\\frac{K_m}{V_{max}}\\frac{1}{S}+\\frac{1}{V_{max}}',blurb:'米氏方程的线性化变换。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01)],
  fn:p=>x=>{if(x<=0) return NaN; return (p.Km as number)/(p.Vmax as number)*x+1/(p.Vmax as number);},
  view:{cx:0.5,cy:0.5,scale:200},
});
