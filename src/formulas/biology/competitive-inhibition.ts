import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'competitive-inhibition',title:'竞争性抑制',domain:'biology',level:3,tex:'v=\\frac{V_{max}S}{K_m(1+I/K_i)+S}',blurb:'抑制剂提高表观 Km。'},
  params:[n('Vmax','Vmax',10,1,30,0.01),n('Km','Km',2,0.1,10,0.01),n('I','I',2,0,20,0.01),n('Ki','Ki',1,0.1,10,0.01)],
  fn:p=>x=>{if(x<0) return NaN; const Kapp=(p.Km as number)*(1+(p.I as number)/(p.Ki as number)); return (p.Vmax as number)*x/(Kapp+x);},
  view:{cx:10,cy:5,scale:15},
});
