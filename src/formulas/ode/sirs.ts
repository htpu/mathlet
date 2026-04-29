import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'sirs',title:'SIRS 模型（带免疫流失）',domain:'ode',level:4,tex:'\\dot S=-\\beta SI+\\xi R',blurb:'免疫衰退导致周期性疫情。'},
  params:[n('beta','β',0.5,0.01,2,0.01),n('gamma','γ',0.1,0.01,1,0.005),n('xi','免疫流失 ξ',0.01,0,0.2,0.001)],
  derivs:p=>(t,y)=>{const S=y[0], I=y[1]; const R=Math.max(0,1-S-I); return [-(p.beta as number)*S*I+(p.xi as number)*R, (p.beta as number)*S*I-(p.gamma as number)*I];},
  init:()=>[[0.99,0.01]],
  view:{cx:0.5,cy:0.3,scale:300}, step:0.05,
});
