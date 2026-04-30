import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'one-compartment-oral',title:'口服一室模型',domain:'biology',level:3,tex:'C(t)=\\frac{Fk_aD}{V(k_a-k_e)}(e^{-k_et}-e^{-k_at})',blurb:'吸收-消除双指数。'},
  params:[n('D','D',100,1,500,1),n('ka','ka',1,0.05,3,0.01),n('ke','ke',0.3,0.01,2,0.01),n('V','V',10,1,50,0.1)],
  fn:p=>t=>{if(t<0) return 0; const ka=p.ka as number, ke=p.ke as number; if(Math.abs(ka-ke)<1e-6) return NaN; return (p.D as number)*ka/((p.V as number)*(ka-ke))*(Math.exp(-ke*t)-Math.exp(-ka*t));},
  view:{cx:5,cy:5,scale:30},
});
