import { n } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'van-der-pol',title:'范德波尔振荡',domain:'ode',level:4,tex:'\\ddot x-\\mu(1-x^2)\\dot x+x=0',blurb:'非线性阻尼，μ 控制松弛振荡形状，存在极限环。'},
  params:[n('mu','μ',1.5,0,5,0.01)],
  derivs:p=>(t,y)=>[y[1], (p.mu as number)*(1-y[0]*y[0])*y[1]-y[0]],
  init:()=>[[2,0],[0.1,0.1],[-2,1]],
  view:{cx:0,cy:0,scale:50}, step:0.02,
});
