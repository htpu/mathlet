import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'orthogonal-rotation',title:'2D 正交旋转矩阵',domain:'linalg',level:1,tex:'R(\\theta)=\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}',blurb:'保长度+保角度。det=1。'},
  params:[n('theta','θ',0.7,-Math.PI,Math.PI,0.01)],
  matrix:p=>{const t=p.theta as number; return [Math.cos(t),-Math.sin(t),Math.sin(t),Math.cos(t)];},
});
