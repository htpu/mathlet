import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'folium-descartes',title:'笛卡尔叶形线',domain:'geometry',level:3,tex:'x^3+y^3-3axy=0',blurb:'参数化形式。'},
  params:[n('a','a',1,0.3,2,0.01)],
  fn:p=>{const a=p.a as number; return t=>{const d=1+t*t*t; return [3*a*t/d, 3*a*t*t/d];};},
  tRange:()=>[-10,-1.5],
  view:{cx:0,cy:0,scale:80},
});
