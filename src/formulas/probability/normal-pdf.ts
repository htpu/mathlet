import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'normal-pdf',title:'正态分布 PDF',domain:'probability',level:1,tex:'\\frac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/2\\sigma^2}',blurb:'调 μ/σ 看钟形偏移与展宽。'},
  params:[n('mu','μ',0,-3,3,0.01),n('sigma','σ',1,0.1,3,0.01)],
  fn:p=>x=>{const mu=p.mu as number, s=p.sigma as number; return Math.exp(-(x-mu)*(x-mu)/(2*s*s))/(s*Math.sqrt(2*Math.PI));},
  view:{cx:0,cy:0.4,scale:80},
});
