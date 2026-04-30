import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'uncompetitive-inhibition',title:'反竞争性抑制',domain:'biology',level:3,tex:'v=\\frac{V_{max}S}{K_m+S(1+I/K_i)}',blurb:'抑制剂降低 Vmax 和 Km。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01),n('I','I',2,0,20,0.01),n('Ki','Ki',1,0.1,10,0.01)],
  fn:p=>x=>{if(x<0) return NaN; const f=1+(p.I as number)/(p.Ki as number); return (p.Vmax as number)*x/((p.Km as number)+x*f);},
  view:{cx:10,cy:5,scale:15},
});
