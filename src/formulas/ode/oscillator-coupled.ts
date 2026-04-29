import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'oscillator-coupled',title:'耦合振子',domain:'ode',level:3,tex:'\\ddot x_1+\\omega^2 x_1+k(x_1-x_2)=0',blurb:'两个谐振子通过弹簧耦合 → normal modes。'},
  params:[n('omega','ω',2,0.5,5,0.01),n('k','耦合 k',0.5,0,3,0.01)],
  derivs:p=>(t,y)=>{const w=p.omega as number, k=p.k as number;
    return [y[2], y[3], -w*w*y[0]-k*(y[0]-y[1]), -w*w*y[1]-k*(y[1]-y[0])];},
  init:()=>[[1,0,0,0]],
  view:{cx:0,cy:0,scale:50}, step:0.02,
});
