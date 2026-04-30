import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'degree-distribution',title:'幂律度分布',domain:'graph',level:3,tex:'P(k)\\propto k^{-\\gamma}',blurb:'无标度网络的特征分布。'},
  params:[n('gam','γ',2.5,1.5,4,0.01)],
  fn:p=>k=>{if(k<=0) return 0; return Math.pow(k,-(p.gam as number));},
  view:{cx:10,cy:0.05,scale:10},
});
