import { n } from '../types';
import { param2d } from '../../templates/param2d';
export default param2d({
  meta:{slug:'trochoid',title:'变形摆线 (Trochoid)',domain:'geometry',level:2,tex:'(rt-d\\sin t,r-d\\cos t)',blurb:'d≠r 时摆线变形（curtate / prolate）。'},
  params:[n('r','r',1,0.3,2,0.01),n('d','d',0.5,0,3,0.01)],
  fn:p=>{const r=p.r as number, d=p.d as number; return t=>[r*t-d*Math.sin(t), r-d*Math.cos(t)];},
  tRange:()=>[0, Math.PI*8],
  view:{cx:10,cy:1,scale:25},
});
