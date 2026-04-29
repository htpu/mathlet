import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'spiral-logarithmic',title:'对数螺线（黄金螺线）',domain:'geometry',level:3,tex:'r=ae^{b\\theta}',blurb:'每转一圈半径乘 e^{2πb}。b=0.306 → 黄金螺线。'},
  params:[n('a','a',0.05,0.01,0.5,0.005),n('b','b',0.18,0.01,0.5,0.005)],
  r:p=>t=>(p.a as number)*Math.exp((p.b as number)*t),
  thetaRange:()=>[0, Math.PI*6],
});
