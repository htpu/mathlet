import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bohr-radius-z',title:'类氢原子 Bohr 半径',domain:'quantum',level:2,tex:'r_n=\\frac{a_0 n^2}{Z}',blurb:'轨道半径 r 随 n²，反比 Z。横轴 n。'},
  params:[i('Z','Z',1,1,30)],
  fn:p=>n=>{const v=Math.floor(n);if(v<1)return NaN;return 5.292e-11*v*v/(p.Z as number);},
  view:{cx:5,cy:1e-10,scale:5e10},
});
