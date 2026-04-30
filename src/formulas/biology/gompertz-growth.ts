import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gompertz-growth',title:'Gompertz 生长',domain:'biology',level:3,tex:'y(t)=ae^{-be^{-ct}}',blurb:'肿瘤/细胞数典型曲线。'},
  params:[n('a','a',100,1,500,1),n('b','b',5,0.1,20,0.01),n('c','c',0.3,0.01,2,0.01)],
  fn:p=>t=>{return (p.a as number)*Math.exp(-(p.b as number)*Math.exp(-(p.c as number)*t));},
  view:{cx:8,cy:50,scale:30},
});
