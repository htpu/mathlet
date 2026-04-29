import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'shear-transform',title:'剪切变换',domain:'linalg',level:1,tex:'\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}',blurb:'X 方向剪切。det=1，保面积。'},
  params:[n('kx','kx',0.5,-2,2,0.01),n('ky','ky',0,-2,2,0.01)],
  matrix:p=>[1, p.kx as number, p.ky as number, 1],
});
