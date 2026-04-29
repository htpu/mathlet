import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
function erf(x:number){const t=1/(1+0.3275911*Math.abs(x)); const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x); return x>=0?y:-y;}
export default fn1d({
  meta:{slug:'cumulative-cdf',title:'正态 CDF',domain:'probability',level:2,tex:'\\Phi(x)=\\frac{1}{2}[1+\\text{erf}(x/\\sqrt 2)]',blurb:'累积分布 S 形。'},
  params:[n('mu','μ',0,-3,3,0.01),n('sigma','σ',1,0.1,3,0.01)],
  fn:p=>x=>0.5*(1+erf((x-(p.mu as number))/((p.sigma as number)*Math.SQRT2))),
  view:{cx:0,cy:0.5,scale:80},
});
