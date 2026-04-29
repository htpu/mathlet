import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'pendulum',title:'单摆相图',domain:'ode',level:3,tex:'\\ddot\\theta+\\frac{g}{L}\\sin\\theta=0',blurb:'非线性单摆的 (θ, ω) 相空间。'},
  params:[n('g','g',9.8,1,20,0.05),n('L','L',1,0.2,3,0.01),n('damp','阻尼',0,0,1,0.005)],
  derivs:p=>(t,y)=>[y[1], -(p.g as number)/(p.L as number)*Math.sin(y[0])-(p.damp as number)*y[1]],
  init:()=>[[0.5,0],[2.5,0],[3,2.5],[-3,-2.5]],
  view:{cx:0,cy:0,scale:30}, step:0.02,
});
