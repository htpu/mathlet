import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'halvorsen',title:'Halvorsen 吸引子',domain:'ode',level:5,tex:'\\dot x=-ax-4y-4z-y^2',blurb:'三轴对称的奇异吸引子。'},
  params:[n('a','a',1.4,0.5,3,0.01)],
  derivs:p=>(t,y)=>{const a=p.a as number; const [x,Y,z]=y; return [-a*x-4*Y-4*z-Y*Y, -a*Y-4*z-4*x-z*z, -a*z-4*x-4*Y-x*x];},
  init:()=>[-5,0,0],
  step:0.008, scale:0.15,
});
