import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'sink-source',title:'汇 / 源（点）',domain:'vectorfield',level:2,tex:'F=k(r-r_0)/|r-r_0|^2',blurb:'k>0 源；k<0 汇。'},
  params:[n('k','强度 k',1,-3,3,0.01)],
  field:p=>(x,y)=>{const r2=x*x+y*y+0.05; return [(p.k as number)*x/r2, (p.k as number)*y/r2];},
  view:{cx:0,cy:0,scale:40},
});
