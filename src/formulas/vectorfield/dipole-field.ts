import { vfield2d } from '../../templates/vfield2d';
import { n } from '../types';
export default vfield2d({
  meta:{slug:'dipole-field',title:'电偶极子场',domain:'vectorfield',level:3,tex:'E=\\frac{1}{4\\pi\\epsilon_0}\\frac{q_i(r-r_i)}{|r-r_i|^3}',blurb:'+/− 电荷的合成 E 场。'},
  params:[n('q1','电荷 +',1,-2,2,0.01),n('q2','电荷 -',-1,-2,2,0.01),n('d','间距 d',1,0.2,3,0.01)],
  field:p=>(x,y)=>{const d=p.d as number, q1=p.q1 as number, q2=p.q2 as number;
    const dx1=x-d/2, dy1=y; const r13=Math.pow(dx1*dx1+dy1*dy1+0.05, 1.5);
    const dx2=x+d/2, dy2=y; const r23=Math.pow(dx2*dx2+dy2*dy2+0.05, 1.5);
    return [q1*dx1/r13+q2*dx2/r23, q1*dy1/r13+q2*dy2/r23];},
  view:{cx:0,cy:0,scale:50},
});
