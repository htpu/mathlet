import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'four-wing',title:'四翼吸引子',domain:'ode',level:5,tex:'\\dot x=ax+yz,\\dot y=bx+cy-xz,\\dot z=-z-xy',blurb:'四翼蝴蝶状混沌。'},
  params:[n('a','a',0.2,0,1,0.005),n('b','b',0.01,-1,1,0.005),n('c','c',-0.4,-1,1,0.005)],
  derivs:p=>(t,y)=>[(p.a as number)*y[0]+y[1]*y[2], (p.b as number)*y[0]+(p.c as number)*y[1]-y[0]*y[2], -y[2]-y[0]*y[1]],
  init:()=>[1,1,1],
  step:0.01, scale:0.4, maxPoints:8000,
});
