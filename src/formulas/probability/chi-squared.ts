import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function gln(x:number){const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.001208650973866179,-0.000005395239384953]; let y=x, sum=1.000000000190015; for(let i=0;i<6;i++) sum+=c[i]/++y; return -(x+5.5)+(x+0.5)*Math.log(x+5.5)+Math.log(2.5066282746310005*sum/x);}
export default fn1d({
  meta:{slug:'chi-squared',title:'卡方分布 χ²',domain:'probability',level:3,tex:'\\frac{x^{k/2-1}e^{-x/2}}{2^{k/2}\\Gamma(k/2)}',blurb:'k 个独立标准正态平方和的分布。'},
  params:[i('k','自由度 k',5,1,30)],
  fn:p=>x=>x>0?Math.exp(-(x/2)+(p.k as number/2-1)*Math.log(x)-(p.k as number/2)*Math.log(2)-gln(p.k as number/2)):0,
  view:{cx:8,cy:0.15,scale:30},
});
