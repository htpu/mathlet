import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'saddle-flow',title:'鞍点流',domain:'vectorfield',level:2,tex:'F=(ax,-ay)',blurb:'拉伸 + 压缩 = 鞍点。'},
  params:[n('a','a',1,-2,2,0.01)],
  field:p=>(x,y)=>[(p.a as number)*x, -(p.a as number)*y],
  view:{cx:0,cy:0,scale:30},
});
