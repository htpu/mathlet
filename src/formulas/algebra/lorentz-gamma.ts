import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lorentz-gamma',title:'洛伦兹因子',domain:'algebra',level:2,tex:'\\gamma=\\frac{1}{\\sqrt{1-\\beta^2}}',blurb:'相对论性时间膨胀因子。横轴 β=v/c。'},
  params:[],
  fn:()=>x=>{if(Math.abs(x)>=1) return NaN; return 1/Math.sqrt(1-x*x);},
  view:{cx:0,cy:3,scale:200},
});
