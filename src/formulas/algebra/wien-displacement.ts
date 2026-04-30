import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wien-displacement',title:'维恩位移定律',domain:'algebra',level:2,tex:'\\lambda_{max}=\\frac{b}{T},\\ b=2898\\,\\mu m\\cdot K',blurb:'峰值波长反比于温度。横轴 T (K)，纵轴 λ_max (μm)。'},
  params:[],
  fn:()=>x=>{if(x<=0) return NaN; return 2898/x;},
  view:{cx:5000,cy:5,scale:0.6},
});
