import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'michaelis-menten',title:'米氏酶动力学',domain:'biology',level:2,tex:'v=\\frac{V_{max}S}{K_m+S}',blurb:'酶反应速率随底物浓度饱和。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01)],
  fn:p=>x=>{if(x<0) return NaN; return (p.Vmax as number)*x/((p.Km as number)+x);},
  view:{cx:5,cy:5,scale:30},
});
