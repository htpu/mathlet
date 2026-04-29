import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'lotka-volterra',title:'Lotka-Volterra 捕食模型',domain:'ode',level:3,tex:'\\dot x=\\alpha x-\\beta xy,\\dot y=\\delta xy-\\gamma y',blurb:'兔狼模型，闭轨周期解。'},
  params:[n('alpha','α',1.1,0.1,3,0.01),n('beta','β',0.4,0.05,2,0.01),n('delta','δ',0.1,0.01,1,0.005),n('gamma','γ',0.4,0.05,2,0.01)],
  derivs:p=>(t,y)=>[(p.alpha as number)*y[0]-(p.beta as number)*y[0]*y[1], (p.delta as number)*y[0]*y[1]-(p.gamma as number)*y[1]],
  init:()=>[[10,5],[20,3],[5,8]],
  view:{cx:15,cy:8,scale:18}, step:0.02,
});
