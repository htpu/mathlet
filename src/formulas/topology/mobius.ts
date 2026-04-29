import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'mobius',title:'莫比乌斯带',domain:'topology',level:3,tex:'(R+v\\cos(u/2))\\cos u',blurb:'单侧曲面。'},
  params:[n('R','半径 R',1.5,0.5,3,0.01),n('w','带宽',0.5,0.1,1.5,0.01)],
  parametric:p=>{const R=p.R as number, w=p.w as number;
    return (u,v,t)=>{const vv=v*w; const x=(R+vv*Math.cos(u/2))*Math.cos(u);
      const y=(R+vv*Math.cos(u/2))*Math.sin(u);
      const z=vv*Math.sin(u/2);
      t.set(x,z,y);
    };},
  uRange:[0,Math.PI*2], vRange:[-1,1],
  segments:[120,12],
});
