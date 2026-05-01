import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rt60-decay',title:'RT60 混响衰减',domain:'music',level:3,tex:'L(t)=L_0-\\frac{60\\,t}{T_{60}}\;\\text{(dB)}',blurb:'混响声压级随时间线性下降 60 dB 所用秒数即 RT60。'},
  params:[n('T60','T60(s)',1.2,0.1,5,0.01)],
  fn:p=>t=>-60*t/(p.T60 as number),
  view:{cx:1,cy:-30,scale:80},
});
