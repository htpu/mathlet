import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'supercoiling-energy',title:'DNA 超螺旋能量',domain:'biology',level:4,tex:'G(\\sigma)=\\frac{1}{2}K(N)\\sigma^2',blurb:'超螺旋密度 σ 的二次能量。'},
  params:[n('K','K',1100,100,3000,1)],
  fn:p=>x=>0.5*(p.K as number)*x*x,
  view:{cx:0,cy:5,scale:200},
});
