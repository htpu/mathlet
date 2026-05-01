import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'einstein-radius',title:'Einstein 环半径',domain:'gr',level:4,tex:'\\theta_E=\\sqrt{\\frac{4GM}{c^2}\\frac{D_{ls}}{D_l D_s}}',blurb:'引力透镜环半径。横轴透镜质量 M (10¹² M☉)。'},
  params:[n('Dratio','D_ls/(D_l D_s) (Mpc⁻¹)',1e-4,1e-6,1e-2,1e-6,true)],
  fn:p=>M=>{if(M<=0)return NaN;const r=4*1.989e30*1e12*M/(3e8*3e8)*(p.Dratio as number)/3.086e22;return Math.sqrt(r)*206265;},
  view:{cx:5,cy:1,scale:80},
});
