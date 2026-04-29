import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'torus',title:'环面 Torus',domain:'topology',level:2,tex:'(R+r\\cos v)\\cos u',blurb:'大半径 R + 小半径 r。'},
  params:[n('R','R',1.5,0.5,3,0.01),n('r','r',0.5,0.1,1.5,0.01)],
  parametric:p=>{const R=p.R as number, r=p.r as number;
    return (u,v,t)=>t.set((R+r*Math.cos(v))*Math.cos(u),(R+r*Math.cos(v))*Math.sin(u),r*Math.sin(v));},
  uRange:[0,Math.PI*2], vRange:[0,Math.PI*2], segments:[80,40],
});
