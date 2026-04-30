import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'freely-jointed-chain',title:'自由连接链',domain:'biology',level:2,tex:'\\langle R^2\\rangle=Nb^2',blurb:'高斯链端到端均方距离 ∝ N。'},
  params:[n('b','b',1,0.1,3,0.01)],
  fn:p=>N=>{if(N<0) return NaN; return N*Math.pow(p.b as number,2);},
  view:{cx:50,cy:50,scale:5},
});
