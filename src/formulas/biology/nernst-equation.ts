import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'nernst-equation',title:'Nernst 方程',domain:'biology',level:3,tex:'E=\\frac{RT}{zF}\\ln\\frac{[ion]_{out}}{[ion]_{in}}',blurb:'离子平衡电位。'},
  params:[n('T','T (K)',310,200,400,1),n('z','z',1,-3,3,1)],
  fn:p=>x=>{if(x<=0) return NaN; const R=8.314, F=96485, T=p.T as number, z=p.z as number; if(z===0) return NaN; return (R*T/(z*F))*Math.log(x)*1000;},
  view:{cx:1,cy:0,scale:120},
});
