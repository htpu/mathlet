import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'boltzmann-activation',title:'Boltzmann 通道激活曲线',domain:'biology',level:3,tex:'P_{open}=\\frac{1}{1+e^{(V_{1/2}-V)/k}}',blurb:'电压门控通道激活概率。'},
  params:[n('V12','V½',-30,-100,50,0.1),n('k','k',8,1,30,0.1)],
  fn:p=>v=>1/(1+Math.exp(((p.V12 as number)-v)/(p.k as number))),
  view:{cx:-30,cy:0.5,scale:5},
});
