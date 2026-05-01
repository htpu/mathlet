import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gravitational-binding',title:'引力束缚能 (log-log)',domain:'gr',level:3,tex:'U=-\\frac{3GM^2}{5R}',blurb:'均匀球体引力自能（双对数）。x=log₁₀R(m)，y=log₁₀|U|(J)。'},
  params:[n('logM','log₁₀ M(kg)',24,18,32,0.01)],
  fn:p=>x=>{const R=Math.pow(10,x);if(R<=0)return NaN;const M=Math.pow(10,p.logM as number);return Math.log10(3*6.674e-11*M*M/(5*R));},
  view:{cx:7,cy:30,scale:25},
});
