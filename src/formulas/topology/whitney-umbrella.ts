import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'whitney-umbrella',title:'Whitney 雨伞',domain:'topology',level:4,tex:'(uv,u,v^2)',blurb:'有自交叉的曲面奇点。'},
  params:[n('s','缩放',1,0.3,2,0.01)],
  parametric:p=>{const s=p.s as number; return (u,v,t)=>t.set(u*v*s, u*s, v*v*s);},
  uRange:[-1.5,1.5], vRange:[-1.5,1.5], segments:[40,60], color:0xd2a6ff,
});
