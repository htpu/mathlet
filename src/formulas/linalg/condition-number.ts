import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'condition-number',title:'条件数（病态）',domain:'linalg',level:4,tex:'\\kappa(A)=\\sigma_1/\\sigma_2',blurb:'条件数大 → 椭圆细长 → 数值病态。'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',1,-3,3,0.01),n('c','c',0.99,-3,3,0.01),n('d','d',1,-3,3,0.01)],
  matrix:p=>[p.a as number, p.b as number, p.c as number, p.d as number],
});
