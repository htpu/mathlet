import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'duffing',title:'Duffing 振子',domain:'ode',level:4,tex:'\\ddot x+\\delta\\dot x+\\alpha x+\\beta x^3=\\gamma\\cos\\omega t',blurb:'非线性弹簧 + 周期外力 → 混沌。'},
  params:[n('delta','δ',0.3,0,1,0.005),n('alpha','α',-1,-2,2,0.01),n('beta','β',1,0,3,0.01),n('gamma','γ',0.5,0,2,0.01),n('omega','ω',1.2,0.1,3,0.01)],
  derivs:p=>(t,y)=>[y[1], -(p.delta as number)*y[1]-(p.alpha as number)*y[0]-(p.beta as number)*y[0]**3+(p.gamma as number)*Math.cos((p.omega as number)*t)],
  init:()=>[[0.1,0]],
  view:{cx:0,cy:0,scale:80}, step:0.02,
});
