import type { Formula } from '../types';
import { n, s as sel } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'conic-sections',title:'圆锥曲线（极坐标）',domain:'geometry',level:2,tex:'r=\\frac{l}{1-e\\cos\\theta}',blurb:'离心率 e<1 椭圆，e=1 抛物线，e>1 双曲线。'},
  params:[n('e','离心率',0.5,0,1.6,0.01), n('l','半通径',1.2,0.3,3,0.01)],
  r:p=>t=>(p.l as number)/(1-(p.e as number)*Math.cos(t)),
  thetaRange:p=>{
    const e=p.e as number;
    if(e>=1){ const lim=Math.acos(1/e)*0.99; return [-Math.PI+0.01+0.001, lim]; }
    return [0, Math.PI*2];
  },
});
