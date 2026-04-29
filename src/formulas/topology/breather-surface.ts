import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'breather-surface',title:'Breather 曲面',domain:'topology',level:5,tex:'\\text{constant negative curvature}',blurb:'sine-Gordon 方程的呼吸子解曲面。'},
  params:[n('b','b',0.4,0.1,0.95,0.005)],
  parametric:p=>{const b=p.b as number, w=Math.sqrt(1-b*b);
    return (u,v,t)=>{const U=u*15-7.5, V=v*15-7.5;
      const denom=b*((w*Math.cosh(b*U))**2+(b*Math.sin(w*V))**2);
      const x=-U+2*w*w*Math.cosh(b*U)*Math.sinh(b*U)/denom;
      const y=2*w*Math.cosh(b*U)*(-w*Math.cos(V)*Math.cos(w*V)-Math.sin(V)*Math.sin(w*V))/denom;
      const z=2*w*Math.cosh(b*U)*(-w*Math.sin(V)*Math.cos(w*V)+Math.cos(V)*Math.sin(w*V))/denom;
      t.set(x*0.1, y*0.1, z*0.1);};
  },
  uRange:[0,1], vRange:[0,1], segments:[80,80], color:0xffb454,
});
