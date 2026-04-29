import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'dadras-attractor',title:'Dadras 吸引子',domain:'ode',level:5,tex:'\\dot x=y-px+qyz',blurb:'5-参数混沌系统。'},
  params:[n('p','p',3,0.1,5,0.01),n('q','q',2.7,0.1,5,0.01),n('r','r',1.7,0.1,5,0.01),n('s','s',2,0.1,5,0.01),n('e','e',9,0.1,15,0.05)],
  derivs:p=>(t,y)=>{const P=p.p as number,Q=p.q as number,R=p.r as number,S=p.s as number,E=p.e as number;
    return [y[1]-P*y[0]+Q*y[1]*y[2], R*y[1]-y[0]*y[2]+y[2], S*y[0]*y[1]-E*y[2]];},
  init:()=>[1,1,1],
  step:0.005, scale:0.15, maxPoints:8000,
});
