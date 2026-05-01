import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'vis-viva',title:'Vis-viva 公式',domain:'gr',level:3,tex:'v^2=GM\\left(\\frac{2}{r}-\\frac{1}{a}\\right)',blurb:'轨道速度随距离变化。横轴 r/a，固定 a。'},
  params:[n('a','a (AU)',1,0.1,10,0.01)],
  fn:p=>r=>{const a=p.a as number;if(r<=0)return NaN;const GM=1.327e20;return Math.sqrt(GM*(2/(r*a*1.496e11)-1/(a*1.496e11)));},
  view:{cx:1,cy:30000,scale:200},
});
