import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'adam-bias',title:'Adam 偏差修正系数',domain:'optimization',level:3,tex:'\\hat m_t=m_t/(1-\\beta_1^t)',blurb:'起步阶段补偿动量估计偏差。横轴 t。'},
  params:[n('beta','β',0.9,0.5,0.999,0.001)],
  fn:p=>t=>{const b=p.beta as number;if(t<=0)return NaN;return 1/(1-Math.pow(b,t));},
  view:{cx:30,cy:5,scale:10},
});
