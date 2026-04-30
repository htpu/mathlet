import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'eadie-hofstee',title:'Eadie-Hofstee 图',domain:'biology',level:3,tex:'v=V_{max}-K_m\\frac{v}{S}',blurb:'v 对 v/S 的线性化。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01)],
  fn:p=>x=>(p.Vmax as number)-(p.Km as number)*x,
  view:{cx:0,cy:5,scale:30},
});
