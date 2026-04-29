import { n } from '../types';
import { ode3d } from '../../templates/ode3d';
export default ode3d({
  meta:{slug:'predator-prey-3',title:'三物种食物链',domain:'ode',level:4,tex:'\\dot x=ax-bxy,\\dot y=cxy-dy-eyz,\\dot z=fyz-gz',blurb:'底部资源 + 中间消费者 + 顶级捕食者。'},
  params:[n('a','a',1,0.1,3,0.01),n('b','b',1,0.1,3,0.01),n('c','c',0.5,0.1,2,0.01),n('d','d',1,0.1,3,0.01),n('e','e',0.5,0.1,2,0.01),n('f','f',0.5,0.1,2,0.01),n('g','g',0.3,0.1,2,0.01)],
  derivs:p=>(t,y)=>{const a=p.a as number,b=p.b as number,c=p.c as number,d=p.d as number,e=p.e as number,f=p.f as number,g=p.g as number;
    return [a*y[0]-b*y[0]*y[1], c*y[0]*y[1]-d*y[1]-e*y[1]*y[2], f*y[1]*y[2]-g*y[2]];},
  init:()=>[1,0.5,0.5],
  step:0.01, scale:0.5, maxPoints:5000,
});
