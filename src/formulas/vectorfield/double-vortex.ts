import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'double-vortex',title:'双涡旋',domain:'vectorfield',level:3,tex:'v=\\sum\\Gamma_i\\hat\\theta_i/r_i',blurb:'两个涡旋的速度场叠加。'},
  params:[n('g1','Γ₁',1,-2,2,0.01),n('g2','Γ₂',-1,-2,2,0.01),n('d','间距',1,0.2,3,0.01)],
  field:p=>(x,y)=>{const d=p.d as number, g1=p.g1 as number, g2=p.g2 as number;
    const dx1=x-d/2, dy1=y; const r1=dx1*dx1+dy1*dy1+0.05;
    const dx2=x+d/2, dy2=y; const r2=dx2*dx2+dy2*dy2+0.05;
    return [-g1*dy1/r1-g2*dy2/r2, g1*dx1/r1+g2*dx2/r2];},
  view:{cx:0,cy:0,scale:50},
});
