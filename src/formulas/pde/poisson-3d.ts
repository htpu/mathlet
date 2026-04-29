import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'poisson-3d',title:'电势曲面 (2D 切片)',domain:'pde',level:4,tex:'-\\nabla^2 V=\\rho',blurb:'两个点电荷的电势。'},
  params:[n('q1','q₁',1,-2,2,0.01),n('q2','q₂',-1,-2,2,0.01),n('d','间距',0.6,0.2,2,0.01)],
  parametric:p=>{const q1=p.q1 as number, q2=p.q2 as number, d=p.d as number;
    return (u,v,t)=>{const x=u, z=v;
      const r1=Math.sqrt((x-d/2)**2+z*z+0.05);
      const r2=Math.sqrt((x+d/2)**2+z*z+0.05);
      const V=q1/r1+q2/r2;
      t.set(x, Math.max(-1.5, Math.min(1.5, V*0.3)), z);};
  },
  uRange:[-2,2], vRange:[-2,2], segments:[60,60], color:0xd2a6ff,
});
