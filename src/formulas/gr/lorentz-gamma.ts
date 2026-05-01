import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lorentz-gamma',title:'Lorentz γ 因子',domain:'gr',level:2,tex:'\\gamma=\\frac{1}{\\sqrt{1-v^2/c^2}}',blurb:'横轴 β = v/c。'},
  params:[],
  fn:_=>b=>{if(Math.abs(b)>=1)return NaN;return 1/Math.sqrt(1-b*b);},
  view:{cx:0,cy:5,scale:200},
});
