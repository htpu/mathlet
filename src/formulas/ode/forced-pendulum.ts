import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'forced-pendulum',title:'强制阻尼摆',domain:'ode',level:4,tex:'\\ddot\\theta+\\gamma\\dot\\theta+\\sin\\theta=A\\cos\\omega t',blurb:'外部周期驱动 + 阻尼 → 混沌。'},
  params:[n('gamma','γ',0.1,0,1,0.005),n('A','A',1.5,0,3,0.01),n('omega','ω',0.6,0.1,3,0.01)],
  derivs:p=>(t,y)=>[y[1], -(p.gamma as number)*y[1]-Math.sin(y[0])+(p.A as number)*Math.cos((p.omega as number)*t)],
  init:()=>[[0.1,0]],
  view:{cx:0,cy:0,scale:50}, step:0.02,
});
