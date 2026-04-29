import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'uniform-flow',title:'均匀流',domain:'vectorfield',level:1,tex:'F=(u_0,v_0)',blurb:'恒定方向流场。'},
  params:[n('u','u',1,-2,2,0.01),n('v','v',0.5,-2,2,0.01)],
  field:p=>(_x,_y)=>[p.u as number, p.v as number],
  view:{cx:0,cy:0,scale:30},
});
