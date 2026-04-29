import { n } from '../types';
import { polar } from '../../templates/polar';
export default polar({
  meta:{slug:'cassini-oval',title:'Cassini 卵形线',domain:'geometry',level:3,tex:'r^4-2a^2 r^2\\cos 2\\theta+a^4=b^4',blurb:'两定点积距离不变。a<b 椭圆，a=b lemniscate，a>b 双叶。'},
  params:[n('a','a',1,0.3,2,0.01),n('b','b',1.2,0.3,2,0.01)],
  r:p=>t=>{const A=(p.a as number)**2*Math.cos(2*t); const B=(p.b as number)**4-(p.a as number)**4*Math.sin(2*t)**2; if(B<0) return NaN; return Math.sqrt(A+Math.sqrt(B));},
  thetaRange:()=>[0, Math.PI*2],
});
