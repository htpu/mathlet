import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
function pdf(mu:number,s:number,x:number){return Math.exp(-(x-mu)*(x-mu)/(2*s*s))/(s*Math.sqrt(2*Math.PI));}
export default fn1d({
  meta:{slug:'gaussian-mix',title:'高斯混合分布',domain:'probability',level:3,tex:'p(x)=\\sum w_i \\mathcal N(\\mu_i,\\sigma_i^2)',blurb:'两个高斯加权叠加。'},
  params:[n('w','权重 w',0.5,0,1,0.01),n('mu1','μ₁',-1,-3,3,0.01),n('s1','σ₁',0.6,0.1,2,0.01),n('mu2','μ₂',1.2,-3,3,0.01),n('s2','σ₂',0.8,0.1,2,0.01)],
  fn:p=>x=>(p.w as number)*pdf(p.mu1 as number,p.s1 as number,x)+(1-(p.w as number))*pdf(p.mu2 as number,p.s2 as number,x),
  view:{cx:0,cy:0.4,scale:80},
});
