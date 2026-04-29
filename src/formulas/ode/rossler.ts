import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'rossler',title:'Rössler 吸引子',domain:'ode',level:4,tex:'\\dot x=-y-z,\\dot y=x+ay,\\dot z=b+z(x-c)',blurb:'仅 1 个非线性项的混沌系统。'},
  params:[n('a','a',0.2,0,0.5,0.005),n('b','b',0.2,0,2,0.01),n('c','c',5.7,1,15,0.05)],
  derivs:p=>(t,y)=>[-y[1]-y[2], y[0]+(p.a as number)*y[1], (p.b as number)+y[2]*(y[0]-(p.c as number))],
  init:()=>[1,1,1],
  step:0.02, scale:0.15,
});
