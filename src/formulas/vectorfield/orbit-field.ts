import { n } from '../types';
import { vfield2d } from '../../templates/vfield2d';
export default vfield2d({
  meta:{slug:'orbit-field',title:'中心引力速度场',domain:'vectorfield',level:3,tex:'\\dot r=v_r\\hat r+v_\\theta\\hat\\theta',blurb:'圆形轨道速度场（圆周运动方向）。'},
  params:[n('strength','强度',1,0.1,3,0.01)],
  field:p=>(x,y)=>{const r=Math.hypot(x,y)+0.1; const s=(p.strength as number)/Math.sqrt(r);
    return [-s*y/r, s*x/r];},
  view:{cx:0,cy:0,scale:40},
});
