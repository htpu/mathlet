import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'strange-attractor',title:'Aizawa 奇异吸引子',domain:'fractal',level:5,tex:'\\dot x=(z-b)x-dy,\\dot y=dx+(z-b)y',blurb:'Aizawa 系统的盘形分形结构。'},
  params:[n('a','a',0.95,0.5,1.5,0.005),n('b','b',0.7,0.1,1.5,0.005),n('c','c',0.6,0.1,1.5,0.005),n('d','d',3.5,1,5,0.01)],
  derivs:p=>(t,y)=>{const [x,Y,z]=y; const a=p.a as number, b=p.b as number, c=p.c as number, d=p.d as number;
    const e=0.25, f=0.1;
    return [(z-b)*x-d*Y, d*x+(z-b)*Y, c+a*z-z*z*z/3-(x*x+Y*Y)*(1+e*z)+f*z*x*x*x];
  },
  init:()=>[0.1,0,0],
  step:0.01, scale:0.4, maxPoints:10000,
});
