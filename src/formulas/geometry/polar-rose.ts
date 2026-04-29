import { n, i } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'polar-rose',title:'极坐标玫瑰',domain:'geometry',level:1,tex:'r=a\\cos(k\\theta)',blurb:'k 偶得 2k 瓣，k 奇得 k 瓣。',},
  params:[n('a','幅度 a',1,0.2,2,0.01), n('k','频率 k',5,1,20,0.5)],
  r:p=>t=>(p.a as number)*Math.cos((p.k as number)*t),
  thetaRange:()=>[0, Math.PI*4],
});
