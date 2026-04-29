import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'phase-portrait',title:'线性系统相图',domain:'ode',level:4,tex:'\\dot x=Ax',blurb:'2x2 线性 ODE 的向量场（节点/鞍点/螺旋）。'},
  params:[n('a','a',-1,-3,3,0.01),n('b','b',2,-3,3,0.01),n('c','c',-2,-3,3,0.01),n('d','d',-1,-3,3,0.01)],
  field:p=>(x,y)=>[(p.a as number)*x+(p.b as number)*y, (p.c as number)*x+(p.d as number)*y],
  view:{cx:0,cy:0,scale:30},
});
