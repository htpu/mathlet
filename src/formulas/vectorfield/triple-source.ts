import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'triple-source',title:'三源叠加场',domain:'vectorfield',level:3,tex:'F=\\sum q_i(r-r_i)/|r-r_i|^3',blurb:'三个等强度源的电场叠加。'},
  params:[n('q1','q₁',1,-2,2,0.01),n('q2','q₂',1,-2,2,0.01),n('q3','q₃',-1,-2,2,0.01)],
  field:p=>(x,y)=>{const pts:[number,number,number][]=[[1,0,p.q1 as number],[-0.5,0.87,p.q2 as number],[-0.5,-0.87,p.q3 as number]];
    let fx=0, fy=0;
    for(const [px,py,q] of pts){const dx=x-px, dy=y-py; const d=Math.pow(dx*dx+dy*dy+0.05,1.5); fx+=q*dx/d; fy+=q*dy/d;}
    return [fx,fy];},
  view:{cx:0,cy:0,scale:50},
});
