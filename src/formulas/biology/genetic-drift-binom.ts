import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'genetic-drift-binom',title:'遗传漂变方差',domain:'biology',level:3,tex:'V_t=p_0q_0(1-(1-1/(2N))^t)',blurb:'有限种群中等位基因频率方差随代数。'},
  params:[n('N','N',100,10,1000,1),n('p0','p₀',0.5,0.01,0.99,0.01)],
  fn:p=>t=>{if(t<0) return NaN; const N=p.N as number, p0=p.p0 as number, q=1-p0; return p0*q*(1-Math.pow(1-1/(2*N),t));},
  view:{cx:200,cy:0.1,scale:1.5},
});
