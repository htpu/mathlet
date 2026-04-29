import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'spiral-archimedean',title:'阿基米德螺线',domain:'geometry',level:2,tex:'r=a+b\\theta',blurb:'相邻螺臂等距 = 阿基米德螺线。'},
  params:[n('a','a',0,-2,2,0.01),n('b','b',0.15,0.01,1,0.005)],
  r:p=>t=>(p.a as number)+(p.b as number)*t,
  thetaRange:()=>[0, Math.PI*8],
});
