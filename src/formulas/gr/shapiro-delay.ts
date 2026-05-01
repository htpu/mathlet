import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'shapiro-delay',title:'Shapiro 时间延迟',domain:'gr',level:4,tex:'\\Delta t=\\frac{4GM}{c^3}\\ln\\frac{4r_1r_2}{b^2}',blurb:'光线掠过质量 M 时的引力时延。横轴 b/Rs (碰撞参数)。'},
  params:[n('M','M (太阳质量)',1,0.1,1e6,0.01,true)],
  fn:p=>b=>{if(b<=0)return NaN;const M=p.M as number;return 2*M*Math.log(1/(b*b))*4.93e-6;},
  view:{cx:1,cy:0,scale:120},
});
