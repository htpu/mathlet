import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'predator-three',title:'Holling 型 II 捕食模型',domain:'ode',level:4,tex:'\\dot N=rN(1-N/K)-\\frac{aN}{1+ahN}P',blurb:'功能反应函数引入饱和效应。'},
  params:[n('r','r',1,0.1,3,0.01),n('K','K',10,1,30,0.1),n('a','a',1,0.1,3,0.01),n('h','h',0.1,0.01,1,0.005),n('e','e',0.5,0.05,2,0.01),n('m','m',0.5,0.05,2,0.01)],
  derivs:p=>(t,y)=>{const r=p.r as number, K=p.K as number, a=p.a as number, h=p.h as number, e=p.e as number, m=p.m as number;
    const N=y[0], P=y[1]; const fr=a*N/(1+a*h*N);
    return [r*N*(1-N/K)-fr*P, e*fr*P-m*P];},
  init:()=>[[5,1]],
  view:{cx:5,cy:2,scale:20}, step:0.02,
});
