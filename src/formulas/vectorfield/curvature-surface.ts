import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'curvature-surface',title:'高斯曲率彩色图',domain:'vectorfield',level:5,tex:'K=\\kappa_1\\kappa_2',blurb:'调参看双曲（K<0）/椭圆（K>0）/平直（K=0）面。'},
  params:[n('a','参数 a',1,0.5,2,0.01),n('b','参数 b',0.5,0,2,0.01)],
  parametric:p=>{const a=p.a as number, b=p.b as number;
    return (u,v,t)=>{t.set(u, a*Math.sin(u)*Math.cos(v)+b*u*v*0.1, v);};
  },
  uRange:[-2,2], vRange:[-2,2], segments:[80,80], color:0xd2a6ff,
});
