import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sigmoid',title:'Sigmoid / Logistic',domain:'algebra',level:2,tex:'\\sigma(x)=\\frac{1}{1+e^{-kx}}',blurb:'神经网激活函数。k 控陡度。'},
  params:[n('k','陡度 k',1,0.1,10,0.01),n('x0','偏移 x₀',0,-3,3,0.01)],
  fn:p=>x=>1/(1+Math.exp(-(p.k as number)*(x-(p.x0 as number)))),
  view:{cx:0,cy:0.5,scale:60},
});
