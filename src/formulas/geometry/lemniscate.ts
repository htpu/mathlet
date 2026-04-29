import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'lemniscate',title:'伯努利双纽线',domain:'geometry',level:3,tex:'r^2=a^2\\cos 2\\theta',blurb:'∞ 形闭曲线。'},
  params:[n('a','a',1.5,0.5,3,0.01)],
  r:p=>t=>{const v=(p.a as number)**2*Math.cos(2*t); return v>=0?Math.sqrt(v):NaN;},
  thetaRange:()=>[-Math.PI, Math.PI*3],
});
