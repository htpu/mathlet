import { fn1d } from '../../templates/fn1d';
function erf(x:number){const t=1/(1+0.3275911*Math.abs(x)); const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x); return x>=0?y:-y;}
export default fn1d({
  meta:{slug:'erf',title:'误差函数 erf',domain:'algebra',level:3,tex:'\\text{erf}(x)=\\frac{2}{\\sqrt\\pi}\\int_0^x e^{-t^2}dt',blurb:'高斯积分的标准化版本。'},
  params:[],
  fn:()=>erf,
  view:{cx:0,cy:0,scale:60},
});
