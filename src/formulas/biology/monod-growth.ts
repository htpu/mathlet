import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'monod-growth',title:'Monod 微生物增长率',domain:'biology',level:2,tex:'\\mu=\\mu_{max}\\frac{S}{K_s+S}',blurb:'比生长率随基质浓度饱和。'},
  params:[n('mu','μmax',1,0.01,3,0.01),n('Ks','Ks',1,0.01,5,0.01)],
  fn:p=>x=>{if(x<0) return NaN; return (p.mu as number)*x/((p.Ks as number)+x);},
  view:{cx:5,cy:0.5,scale:40},
});
