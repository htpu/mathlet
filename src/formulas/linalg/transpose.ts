import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'transpose',title:'转置 Aᵀ',domain:'linalg',level:1,tex:'(A^T)_{ij}=A_{ji}',blurb:'2x2 转置 = 沿主对角线翻转。'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',2,-3,3,0.01),n('c','c',-0.5,-3,3,0.01),n('d','d',1,-3,3,0.01)],
  matrix:p=>[p.a as number, p.c as number, p.b as number, p.d as number],
});
