import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'limacon',title:'帕斯卡蜗线',domain:'geometry',level:2,tex:'r=a+b\\cos\\theta',blurb:'a<b 内环，a=b 心脏线，a>b 凸卵形。'},
  params:[n('a','a',1,0,2,0.01),n('b','b',2,0.1,3,0.01)],
  r:p=>t=>(p.a as number)+(p.b as number)*Math.cos(t),
  thetaRange:()=>[0, Math.PI*2],
});
