import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'affine-transform',title:'仿射变换组合',domain:'linalg',level:2,tex:'A=R(\\theta)S(s_x,s_y)',blurb:'旋转 + 缩放复合矩阵。'},
  params:[n('theta','旋转 θ',0.6,-Math.PI,Math.PI,0.01),n('sx','sx',1.5,0.1,3,0.01),n('sy','sy',1,0.1,3,0.01)],
  matrix:p=>{const t=p.theta as number, sx=p.sx as number, sy=p.sy as number;
    return [Math.cos(t)*sx, -Math.sin(t)*sy, Math.sin(t)*sx, Math.cos(t)*sy];},
});
