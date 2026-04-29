import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'heaviside',title:'Heaviside 阶跃 (sigmoid 近似)',domain:'calculus',level:2,tex:'H_k(x)=\\frac{1}{1+e^{-kx}}',blurb:'k→∞ → 阶跃函数。'},
  params:[n('k','k',5,0.5,100,0.05,true),n('a','偏移 a',0,-3,3,0.01)],
  fn:p=>x=>1/(1+Math.exp(-(p.k as number)*(x-(p.a as number)))),
  view:{cx:0,cy:0.5,scale:60},
});
