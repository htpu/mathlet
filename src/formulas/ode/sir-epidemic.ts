import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'sir-epidemic',title:'SIR 流行病模型',domain:'ode',level:3,tex:'\\dot S=-\\beta SI,\\dot I=\\beta SI-\\gamma I',blurb:'易感/感染轨迹（R 由守恒补出）。'},
  params:[n('beta','β',0.4,0.05,2,0.01),n('gamma','γ',0.1,0.01,1,0.005)],
  derivs:p=>(t,y)=>[-(p.beta as number)*y[0]*y[1], (p.beta as number)*y[0]*y[1]-(p.gamma as number)*y[1]],
  init:()=>[[0.99,0.01]],
  view:{cx:0.5,cy:0.5,scale:200}, step:0.05,
});
