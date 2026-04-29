import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'flow-shear',title:'剪切流 (Couette)',domain:'vectorfield',level:2,tex:'u=\\dot\\gamma y',blurb:'两壁间线性速度剖面。'},
  params:[n('rate','剪切率',1,-2,2,0.01)],
  field:p=>(_,y)=>[(p.rate as number)*y, 0],
  view:{cx:0,cy:0,scale:30},
});
