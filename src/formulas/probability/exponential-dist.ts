import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'exponential-dist',title:'指数分布',domain:'probability',level:2,tex:'\\lambda e^{-\\lambda x},x\\ge 0',blurb:'无记忆性；λ 越大衰减越快。'},
  params:[n('lambda','λ',1,0.1,5,0.01)],
  fn:p=>x=>x>=0?(p.lambda as number)*Math.exp(-(p.lambda as number)*x):0,
  view:{cx:2,cy:0.6,scale:80},
});
