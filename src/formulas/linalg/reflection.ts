import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'reflection',title:'镜像反射',domain:'linalg',level:1,tex:'R_\\theta=\\begin{pmatrix}\\cos 2\\theta&\\sin 2\\theta\\\\\\sin 2\\theta&-\\cos 2\\theta\\end{pmatrix}',blurb:'沿与 x 轴成 θ 的直线反射。det=-1。'},
  params:[n('theta','θ',0.5,-Math.PI/2,Math.PI/2,0.01)],
  matrix:p=>{const t=p.theta as number; return [Math.cos(2*t), Math.sin(2*t), Math.sin(2*t), -Math.cos(2*t)];},
});
