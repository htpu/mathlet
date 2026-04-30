import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'dna-melting',title:'DNA 熔解曲线',domain:'biology',level:3,tex:'f(T)=\\frac{1}{1+e^{(T_m-T)/\\sigma}}',blurb:'升温双链解链分数。'},
  params:[n('Tm','Tm (°C)',75,40,100,0.1),n('sig','σ',2,0.1,10,0.01)],
  fn:p=>x=>1/(1+Math.exp(((p.Tm as number)-x)/(p.sig as number))),
  view:{cx:75,cy:0.5,scale:6},
});
