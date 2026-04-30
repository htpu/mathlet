import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'quantum-tunneling',title:'量子隧穿透射率',domain:'quantum',level:4,tex:'T\\approx 16E(V_0-E)/V_0^2 \\cdot e^{-2\\kappa L}',blurb:'方势垒透射概率。横轴 E/V₀。'},
  params:[n('kL','κL',2,0,8,0.01)],
  fn:p=>x=>{if(x<=0||x>=1) return NaN; return 16*x*(1-x)*Math.exp(-2*(p.kL as number));},
  view:{cx:0.5,cy:0.5,scale:300},
});
