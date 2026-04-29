import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'cissoid',title:'Diocles 蔓叶线',domain:'geometry',level:3,tex:'r=2a\\sin^2\\theta/\\cos\\theta',blurb:'倍立方问题的求解曲线。'},
  params:[n('a','a',0.5,0.1,2,0.01)],
  r:p=>t=>2*(p.a as number)*Math.sin(t)**2/Math.cos(t),
  thetaRange:()=>[-Math.PI/2+0.05, Math.PI/2-0.05],
});
