import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'brusselator',title:'Brusselator 化学振子',domain:'ode',level:4,tex:'\\dot x=A+x^2y-(B+1)x',blurb:'三分子化学反应模型，存在极限环。'},
  params:[n('A','A',1,0.1,5,0.01),n('B','B',3,0.1,8,0.01)],
  derivs:p=>(t,y)=>{const A=p.A as number, B=p.B as number; return [A+y[0]*y[0]*y[1]-(B+1)*y[0], B*y[0]-y[0]*y[0]*y[1]];},
  init:()=>[[1,1]],
  view:{cx:1,cy:1.5,scale:50}, step:0.01,
});
