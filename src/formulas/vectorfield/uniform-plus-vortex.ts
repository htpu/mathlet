import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'uniform-plus-vortex',title:'均匀流 + 涡（Magnus）',domain:'vectorfield',level:4,tex:'F=U_\\infty+\\Gamma(-y,x)/r^2',blurb:'马格努斯效应基本场。'},
  params:[n('U','U',1,-2,2,0.01),n('gamma','Γ',1,-3,3,0.01)],
  field:p=>(x,y)=>{const r2=x*x+y*y+0.05; return [(p.U as number)-(p.gamma as number)*y/r2, (p.gamma as number)*x/r2];},
  view:{cx:0,cy:0,scale:40},
});
