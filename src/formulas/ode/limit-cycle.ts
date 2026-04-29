import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'limit-cycle',title:'极限环（Hopf 分岔）',domain:'ode',level:4,tex:'\\dot r=\\mu r-r^3',blurb:'μ>0 时出现稳定极限环（Stuart-Landau）。'},
  params:[n('mu','μ',1,-1,3,0.01)],
  derivs:p=>(t,y)=>{const x=y[0],Y=y[1]; const r2=x*x+Y*Y; const m=p.mu as number; return [m*x-Y-x*r2, m*Y+x-Y*r2];},
  init:()=>[[0.1,0],[2.5,0],[-2,2]],
  view:{cx:0,cy:0,scale:60}, step:0.02,
});
