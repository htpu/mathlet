import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'logistic-growth',title:'Logistic 种群增长',domain:'biology',level:2,tex:'N(t)=\\frac{K}{1+(K/N_0-1)e^{-rt}}',blurb:'有限承载力的种群曲线。'},
  params:[n('r','r',0.5,0.05,2,0.01),n('K','K',100,10,500,1),n('N0','N₀',5,1,100,0.1)],
  fn:p=>t=>{if(t<0) return NaN; const K=p.K as number, N0=p.N0 as number, r=p.r as number; return K/(1+(K/N0-1)*Math.exp(-r*t));},
  view:{cx:10,cy:50,scale:30},
});
