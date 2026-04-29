import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'witch-of-agnesi',title:'Agnesi 巫女线',domain:'geometry',level:2,tex:'y=\\frac{8a^3}{x^2+4a^2}',blurb:'柯西分布的几何曲线。'},
  params:[n('a','a',1,0.3,3,0.01)],
  fn:p=>x=>{const a=p.a as number; return 8*a*a*a/(x*x+4*a*a);},
  view:{cx:0,cy:1,scale:60},
});
