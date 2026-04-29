import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
function gammaLn(x:number){const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.001208650973866179,-0.000005395239384953]; let y=x, sum=1.000000000190015; for(let i=0;i<6;i++) sum+=c[i]/++y; return -(x+5.5)+(x+0.5)*Math.log(x+5.5)+Math.log(2.5066282746310005*sum/x);}
function beta(a:number,b:number,x:number){if(x<=0||x>=1) return 0; return Math.exp(gammaLn(a+b)-gammaLn(a)-gammaLn(b)+(a-1)*Math.log(x)+(b-1)*Math.log(1-x));}
export default fn1d({
  meta:{slug:'beta-dist',title:'Beta 分布',domain:'probability',level:3,tex:'\\frac{x^{\\alpha-1}(1-x)^{\\beta-1}}{B(\\alpha,\\beta)}',blurb:'共轭于二项分布。α=β=1 均匀。'},
  params:[n('alpha','α',2,0.1,10,0.05),n('beta','β',5,0.1,10,0.05)],
  fn:p=>x=>beta(p.alpha as number, p.beta as number, x),
  view:{cx:0.5,cy:1.5,scale:200},
});
