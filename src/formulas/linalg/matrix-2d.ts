import { n } from '../types';
import { matrix2d } from '../../templates/matrix2d';
export default matrix2d({
  meta:{slug:'matrix-2d',title:'2x2 矩阵变换',domain:'linalg',level:2,tex:'\\begin{pmatrix}a&b\\\\c&d\\end{pmatrix}',blurb:'网格 + 基向量在线性变换下的形变。'},
  params:[n('a','a',1,-2,2,0.01),n('b','b',0.3,-2,2,0.01),n('c','c',0.5,-2,2,0.01),n('d','d',1,-2,2,0.01)],
  matrix:p=>[p.a as number,p.b as number,p.c as number,p.d as number],
  view:{cx:0,cy:0,scale:50},
});
