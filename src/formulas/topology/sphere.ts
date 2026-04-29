import { n } from '../types';
import { surface3d } from '../../templates/surface3d';
export default surface3d({
  meta:{slug:'sphere',title:'球面参数化',domain:'topology',level:1,tex:'(\\sin v\\cos u,\\sin v\\sin u,\\cos v)',blurb:'经纬度参数化球面。'},
  params:[n('R','半径',1,0.3,2,0.01)],
  parametric:p=>{const R=p.R as number; return (u,v,t)=>t.set(R*Math.sin(v)*Math.cos(u),R*Math.cos(v),R*Math.sin(v)*Math.sin(u));},
  uRange:[0,Math.PI*2], vRange:[0,Math.PI], segments:[60,40], color:0x39bae6,
});
