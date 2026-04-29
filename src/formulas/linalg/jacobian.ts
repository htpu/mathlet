import { n } from '../types';
import { matrix2d } from '../../templates/matrix2d';
export default matrix2d({
  meta:{slug:'jacobian',title:'雅可比矩阵（局部线性化）',domain:'linalg',level:4,tex:'J=\\begin{pmatrix}\\partial f/\\partial x&\\partial f/\\partial y\\end{pmatrix}',blurb:'非线性映射 (sin x, cos y) 在某点的 Jacobian。'},
  params:[n('x0','x₀',1,-3,3,0.01),n('y0','y₀',1,-3,3,0.01)],
  matrix:p=>[Math.cos(p.x0 as number), 0, 0, -Math.sin(p.y0 as number)],
});
