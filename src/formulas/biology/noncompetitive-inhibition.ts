import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'noncompetitive-inhibition',title:'非竞争性抑制',domain:'biology',level:3,tex:'v=\\frac{V_{max}S/(1+I/K_i)}{K_m+S}',blurb:'抑制剂降低表观 Vmax。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01),n('I','I',2,0,20,0.01),n('Ki','Ki',1,0.1,10,0.01)],
  fn:p=>x=>{if(x<0) return NaN; const Vapp=(p.Vmax as number)/(1+(p.I as number)/(p.Ki as number)); return Vapp*x/((p.Km as number)+x);},
  view:{cx:10,cy:5,scale:15},
});
