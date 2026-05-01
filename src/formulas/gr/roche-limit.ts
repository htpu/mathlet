import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'roche-limit',title:'Roche 极限',domain:'gr',level:3,tex:'d=R_M\\left(2\\frac{\\rho_M}{\\rho_m}\\right)^{1/3}',blurb:'流体卫星被潮汐撕碎的最近距离。横轴 ρM/ρm。'},
  params:[n('RM','RM',1,0.1,5,0.01)],
  fn:p=>r=>r<=0?NaN:(p.RM as number)*Math.cbrt(2*r),
  view:{cx:1,cy:1,scale:80},
});
