import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lr-exp-decay',title:'指数学习率衰减',domain:'optimization',level:1,tex:'\\eta_t=\\eta_0\\,\\gamma^t',blurb:'每步乘 γ。横轴 t。'},
  params:[n('eta0','η₀',1,0.01,1,0.001),n('gamma','γ',0.95,0.5,0.999,0.001)],
  fn:p=>t=>(p.eta0 as number)*Math.pow(p.gamma as number,t),
  view:{cx:50,cy:0.5,scale:6},
});
