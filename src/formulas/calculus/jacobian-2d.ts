import { matrix2d } from '../../templates/matrix2d';
import { n } from '../types';
export default matrix2d({
  meta:{slug:'jacobian-2d',title:'雅可比变换（极坐标）',domain:'calculus',level:4,tex:'J=\\begin{pmatrix}\\cos\\theta&-r\\sin\\theta\\\\\\sin\\theta&r\\cos\\theta\\end{pmatrix}',blurb:'极坐标 (r, θ) → (x, y) 在某点的雅可比。'},
  params:[n('r','r',1,0.1,2,0.01),n('theta','θ',0.5,0,Math.PI*2,0.01)],
  matrix:p=>{const r=p.r as number, t=p.theta as number; return [Math.cos(t), -r*Math.sin(t), Math.sin(t), r*Math.cos(t)];},
});
