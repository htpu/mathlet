import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function T(n:number,x:number){return Math.cos(n*Math.acos(Math.max(-1,Math.min(1,x))));}
export default fn1d({
  meta:{slug:'chebyshev-poly',title:'Chebyshev 多项式 Tₙ',domain:'algebra',level:4,tex:'T_n(\\cos\\theta)=\\cos n\\theta',blurb:'极小最大误差的逼近基。'},
  params:[i('n','阶',5,0,15)],
  fn:p=>x=>T(p.n as number, x),
  view:{cx:0,cy:0,scale:140},
});
