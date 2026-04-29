import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'relaxation',title:'松弛振荡（FitzHugh-Nagumo）',domain:'ode',level:4,tex:'\\dot v=v-v^3/3-w+I,\\dot w=\\epsilon(v+a-bw)',blurb:'神经元模型，慢-快动力学。'},
  params:[n('I','输入电流 I',0.5,-1,2,0.01),n('eps','ε',0.08,0.01,0.5,0.005),n('a','a',0.7,0,1.5,0.01),n('b','b',0.8,0,1.5,0.01)],
  derivs:p=>(t,y)=>{const I=p.I as number, e=p.eps as number, a=p.a as number, b=p.b as number; return [y[0]-y[0]**3/3-y[1]+I, e*(y[0]+a-b*y[1])];},
  init:()=>[[0,0],[1,1]],
  view:{cx:0,cy:0,scale:50}, step:0.05,
});
