import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
function gln(x:number){const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.001208650973866179,-0.000005395239384953]; let y=x, sum=1.000000000190015; for(let i=0;i<6;i++) sum+=c[i]/++y; return -(x+5.5)+(x+0.5)*Math.log(x+5.5)+Math.log(2.5066282746310005*sum/x);}
export default fn1d({
  meta:{slug:'student-t',title:'t 分布',domain:'probability',level:3,tex:'\\frac{\\Gamma((\\nu+1)/2)}{\\sqrt{\\nu\\pi}\\Gamma(\\nu/2)}(1+x^2/\\nu)^{-(\\nu+1)/2}',blurb:'ν→∞ 趋于标准正态。'},
  params:[i('nu','自由度 ν',5,1,100)],
  fn:p=>x=>{const v=p.nu as number; return Math.exp(gln((v+1)/2)-gln(v/2))/Math.sqrt(v*Math.PI)*Math.pow(1+x*x/v, -(v+1)/2);},
  view:{cx:0,cy:0.4,scale:80},
});
