import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'inverse-matrix',title:'逆矩阵作用',domain:'linalg',level:2,tex:'A^{-1}=\\frac{1}{\\det A}\\begin{pmatrix}d&-b\\\\-c&a\\end{pmatrix}',blurb:'A 的逆把 A 的网格还原。'},
  params:[n('a','a',1.5,-3,3,0.01),n('b','b',0.5,-3,3,0.01),n('c','c',0.3,-3,3,0.01),n('d','d',1.2,-3,3,0.01)],
  matrix:p=>{const det=(p.a as number)*(p.d as number)-(p.b as number)*(p.c as number); if(Math.abs(det)<1e-9) return [1,0,0,1]; return [(p.d as number)/det, -(p.b as number)/det, -(p.c as number)/det, (p.a as number)/det];},
});
