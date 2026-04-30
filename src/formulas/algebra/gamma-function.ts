import { fn1d } from '../../templates/fn1d';
function gln(x:number){const c=[76.18009172947146,-86.50532032941677,24.01409824083091,-1.231739572450155,0.001208650973866179,-0.000005395239384953]; let y=x, sum=1.000000000190015; for(let i=0;i<6;i++) sum+=c[i]/++y; return -(x+5.5)+(x+0.5)*Math.log(x+5.5)+Math.log(2.5066282746310005*sum/x);}
export default fn1d({
  meta:{slug:'gamma-function',title:'Γ 函数',domain:'algebra',level:3,tex:'\\Gamma(x)=\\int_0^\\infty t^{x-1}e^{-t}dt',blurb:'阶乘的连续推广，Γ(n)=(n-1)!。'},
  params:[],
  fn:()=>x=>{if(x<=0) return NaN; const v=Math.exp(gln(x)); return Math.min(20, v);},
  view:{cx:2,cy:5,scale:25},
});
