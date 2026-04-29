import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'strain-rate',title:'纯应变率场',domain:'vectorfield',level:3,tex:'F=(ax+by, bx+cy)',blurb:'对称矩阵 → 拉伸压缩主轴。'},
  params:[n('a','a',0.5,-2,2,0.01),n('b','b',0.5,-2,2,0.01),n('c','c',-0.5,-2,2,0.01)],
  field:p=>(x,y)=>[(p.a as number)*x+(p.b as number)*y, (p.b as number)*x+(p.c as number)*y],
  view:{cx:0,cy:0,scale:30},
});
