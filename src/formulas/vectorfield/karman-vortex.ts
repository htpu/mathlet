import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'karman-vortex',title:'卡门涡街',domain:'vectorfield',level:4,tex:'\\sum\\pm\\Gamma\\text{ at staggered points}',blurb:'交替排列正负涡 → 涡街。'},
  params:[n('gamma','Γ',1,0,3,0.01),n('d','间距',1,0.3,2,0.01)],
  field:p=>(x,y)=>{let fx=0, fy=0; const g=p.gamma as number, d=p.d as number;
    for(let k=-3;k<=3;k++){const sign=k%2===0?1:-1;
      const dx=x-k*d, dy=y-(k%2===0?0.3:-0.3);
      const r2=dx*dx+dy*dy+0.05;
      fx+=-sign*g*dy/r2; fy+=sign*g*dx/r2;}
    return [fx,fy];
  },
  view:{cx:0,cy:0,scale:30},
});
