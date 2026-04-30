import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'beating',title:'拍音',domain:'music',level:2,tex:'\\sin(2\\pi f_1 t)+\\sin(2\\pi f_2 t)',blurb:'相近频率叠加产生包络拍。'},
  params:[n('f1','f1',440,200,800,0.1),n('f2','f2',445,200,800,0.1)],
  fn:p=>t=>Math.sin(2*Math.PI*(p.f1 as number)*t)+Math.sin(2*Math.PI*(p.f2 as number)*t),
  view:{cx:0.5,cy:0,scale:80},
});
