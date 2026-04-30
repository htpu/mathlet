import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'beat-pattern',title:'拍频',domain:'signals',level:2,tex:'y=\\sin(\\omega_1 t)+\\sin(\\omega_2 t)',blurb:'两个相近频率叠加产生包络拍。'},
  params:[n('w1','ω₁',10,1,30,0.01),n('w2','ω₂',11,1,30,0.01)],
  fn:p=>t=>Math.sin((p.w1 as number)*t)+Math.sin((p.w2 as number)*t),
  view:{cx:Math.PI,cy:0,scale:30},
});
