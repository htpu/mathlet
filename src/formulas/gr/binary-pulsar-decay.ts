import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'binary-pulsar-decay',title:'双脉冲星轨道衰减',domain:'gr',level:5,tex:'\\dot P_b\\propto -P_b^{-5/3}',blurb:'引力波辐射使轨道周期缩短。横轴当前 P_b (天)。'},
  params:[],
  fn:_=>P=>P<=0?NaN:-Math.pow(P,-5/3)*1e3,
  view:{cx:0.5,cy:-1,scale:300},
});
