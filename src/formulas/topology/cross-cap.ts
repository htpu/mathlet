import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'cross-cap',title:'Cross-cap (RP² 浸入)',domain:'topology',level:5,tex:'\\text{self-intersecting RP^2 immersion}',blurb:'另一种 RP² 浸入 R³ 的方式。'},
  params:[n('s','缩放',1,0.3,2,0.01)],
  parametric:p=>{const s=p.s as number;
    return (u,v,t)=>{t.set(s*Math.sin(2*u)*Math.cos(v)**2, s*Math.sin(u)*Math.sin(2*v)/2, s*Math.cos(u)*Math.sin(2*v)/2);};
  },
  uRange:[0,Math.PI], vRange:[0,Math.PI], segments:[60,60], color:0xf07178,
});
