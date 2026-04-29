import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'dipole-flow',title:'流体偶极',domain:'vectorfield',level:3,tex:'F=\\nabla(\\cos\\theta/r)',blurb:'势流偶极的速度场。'},
  params:[n('mu','μ',1,-2,2,0.01)],
  field:p=>(x,y)=>{const r2=x*x+y*y+0.05; const r4=r2*r2; return [(p.mu as number)*(y*y-x*x)/r4, -(p.mu as number)*2*x*y/r4];},
  view:{cx:0,cy:0,scale:40},
});
