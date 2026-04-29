import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'chen-attractor',title:'Chen 吸引子',domain:'ode',level:5,tex:'\\dot x=a(y-x),\\dot y=(c-a)x-xz+cy,\\dot z=xy-bz',blurb:'类洛伦兹结构但参数空间不同。'},
  params:[n('a','a',35,0,50,0.05),n('b','b',3,0,10,0.05),n('c','c',28,0,50,0.05)],
  derivs:p=>(t,y)=>{const a=p.a as number, b=p.b as number, c=p.c as number; return [a*(y[1]-y[0]), (c-a)*y[0]-y[0]*y[2]+c*y[1], y[0]*y[1]-b*y[2]];},
  init:()=>[-10,0,37],
  step:0.005, scale:0.05,
});
