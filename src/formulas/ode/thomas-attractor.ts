import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'thomas-attractor',title:'Thomas 吸引子',domain:'ode',level:5,tex:'\\dot x=\\sin y-bx',blurb:'对称循环结构的混沌系统。'},
  params:[n('b','b',0.18,0,1,0.005)],
  derivs:p=>(t,y)=>[Math.sin(y[1])-(p.b as number)*y[0], Math.sin(y[2])-(p.b as number)*y[1], Math.sin(y[0])-(p.b as number)*y[2]],
  init:()=>[1,1,1],
  step:0.05, scale:0.4, maxPoints:8000,
});
