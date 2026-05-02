import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'distance-point-line',title:'点到直线距离',domain:'geometry',level:1,tex:'d=\\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}',blurb:'点 (x₀,0) 到直线 ax+by+c=0 的距离。横轴 x₀。'},
  params:[n('a','a',1,-3,3,0.01),n('b','b',1,-3,3,0.01),n('c','c',-2,-5,5,0.01)],
  fn:p=>x0=>{const a=p.a as number,b=p.b as number,c=p.c as number;return Math.abs(a*x0+c)/Math.sqrt(a*a+b*b);},
  view:{cx:0,cy:1.5,scale:50},
});
