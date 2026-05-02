import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'soft-thresholding',title:'软阈值算子',domain:'optimization',level:3,tex:'S_\\lambda(x)=\\text{sign}(x)\\max(|x|-\\lambda,0)',blurb:'L1 (Lasso) 近端算子。横轴 x。'},
  params:[n('lambda','λ',0.5,0,3,0.01)],
  fn:p=>x=>{const l=p.lambda as number;return Math.sign(x)*Math.max(Math.abs(x)-l,0);},
  view:{cx:0,cy:0,scale:80},
});
