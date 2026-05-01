import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'boltzmann-population',title:'两能级 Boltzmann 占据比',domain:'chemistry',level:2,tex:'\\frac{N_1}{N_0}=e^{-\\Delta E/kT}',blurb:'高能态相对低能态布居数。横轴 T (K)。'},
  params:[n('dE','ΔE(eV)',0.025,0.001,1,0.001)],
  fn:p=>T=>T<=0?NaN:Math.exp(-(p.dE as number)/(8.617e-5*T)),
  view:{cx:300,cy:0.5,scale:0.6},
});
