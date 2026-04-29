import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'lorenz',title:'洛伦兹吸引子',domain:'ode',level:4,tex:'\\dot x=\\sigma(y-x),\\dot y=x(\\rho-z)-y,\\dot z=xy-\\beta z',blurb:'σ=10, ρ=28, β=8/3 时混沌；蝴蝶状奇异吸引子。'},
  params:[n('sigma','σ',10,0,30,0.05),n('rho','ρ',28,0,60,0.05),n('beta','β',8/3,0.1,5,0.01)],
  derivs:p=>(t,y)=>{const [x,Y,z]=y; return [(p.sigma as number)*(Y-x), x*((p.rho as number)-z)-Y, x*Y-(p.beta as number)*z];},
  init:()=>[1,1,1],
  step:0.005, scale:0.05,
});
