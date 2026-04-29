import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'spring-mass',title:'阻尼弹簧',domain:'ode',level:3,tex:'\\ddot x+2\\zeta\\omega\\dot x+\\omega^2 x=0',blurb:'欠阻尼/临界/过阻尼三种情况。'},
  params:[n('omega','ω',2,0.1,5,0.01),n('zeta','ζ',0.2,0,2,0.01)],
  derivs:p=>(t,y)=>[y[1], -2*(p.zeta as number)*(p.omega as number)*y[1]-(p.omega as number)**2*y[0]],
  init:()=>[[2,0]],
  view:{cx:0,cy:0,scale:50}, step:0.02,
});
