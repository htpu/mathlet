import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'blast-evalue',title:'BLAST E-value',domain:'biology',level:3,tex:'E=Kmne^{-\\lambda S}',blurb:'比对显著性随 score 指数衰减。'},
  params:[n('K','K',0.041,1e-3,1,0.001),n('lam','λ',0.267,0.01,1,0.001),n('mn','mn',1e6,1e3,1e10,1,true)],
  fn:p=>S=>{return (p.K as number)*(p.mn as number)*Math.exp(-(p.lam as number)*S);},
  view:{cx:50,cy:1,scale:5},
});
