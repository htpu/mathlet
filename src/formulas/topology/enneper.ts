import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'enneper',title:'Enneper 极小曲面',domain:'topology',level:5,tex:'(u-u^3/3+uv^2,\\,-v+v^3/3-vu^2,\\,u^2-v^2)',blurb:'局部均值曲率为零的极小曲面。'},
  params:[n('size','范围',2,0.5,3,0.01)],
  parametric:p=>{const sz=p.size as number;
    return (u,v,t)=>{const x=u-u**3/3+u*v*v; const y=-v+v**3/3-v*u*u; const z=u*u-v*v;
      t.set(x/sz, z/sz, y/sz);};},
  uRange:[-3,3], vRange:[-3,3],
  segments:[60,60], color:0xc2d94c,
});
