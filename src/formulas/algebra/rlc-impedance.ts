import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'rlc-impedance',title:'RLC 串联阻抗',domain:'algebra',level:3,tex:'|Z(\\omega)|=\\sqrt{R^2+(\\omega L-\\frac{1}{\\omega C})^2}',blurb:'共振频率 ω₀=1/√(LC)。'},
  params:[n('R','R (Ω)',2,0.1,20,0.01),n('L','L (H)',0.1,0.01,2,0.01),n('C','C (μF)',100,1,500,1)],
  fn:p=>w=>{if(w<=0) return NaN; const C=(p.C as number)*1e-6; const X=(p.L as number)*w-1/(w*C); return Math.sqrt((p.R as number)**2+X*X);},
  view:{cx:300,cy:15,scale:1},
});
