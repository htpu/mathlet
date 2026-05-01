import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'landau-zener',title:'Landau-Zener 跃迁概率',domain:'quantum',level:4,tex:'P=e^{-2\\pi\\Gamma}',blurb:'对 anti-crossing 的非绝热跃迁概率。横轴 Γ = Δ²/(ℏ|α|v)。'},
  params:[],
  fn:_=>g=>g<0?NaN:Math.exp(-2*Math.PI*g),
  view:{cx:0.5,cy:0.5,scale:300},
});
