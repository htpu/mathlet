import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'projective-plane',title:'实射影平面 (Boy 表面)',domain:'topology',level:5,tex:'\\mathbb{RP}^2',blurb:'不可定向无边界曲面浸入 R³。'},
  params:[n('s','缩放',0.4,0.1,1,0.005)],
  parametric:p=>{const s=p.s as number;
    return (u,v,t)=>{const cu=Math.cos(u), su=Math.sin(u), cv=Math.cos(v), sv=Math.sin(v);
      const denom=2-Math.SQRT2*sv*Math.sin(3*u);
      const x=(Math.SQRT2*cv*cv*Math.cos(2*u)+cu*sv*cv*2)/denom;
      const y=(Math.SQRT2*cv*cv*Math.sin(2*u)-su*sv*cv*2)/denom;
      const z=(3*cv*cv)/denom;
      t.set(x*s, z*s-0.5, y*s);};
  },
  uRange:[0,Math.PI], vRange:[0,Math.PI/2], segments:[80,40], color:0xd2a6ff,
});
