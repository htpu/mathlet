import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'vortex-line',title:'涡线',domain:'vectorfield',level:2,tex:'F=\\Gamma(-y,x)/r^2',blurb:'强度 Γ 单一涡线。'},
  params:[n('gamma','Γ',1,-3,3,0.01)],
  field:p=>(x,y)=>{const r2=x*x+y*y+0.05; return [-(p.gamma as number)*y/r2, (p.gamma as number)*x/r2];},
  view:{cx:0,cy:0,scale:40},
});
