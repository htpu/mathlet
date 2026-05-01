import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'euler-genus-orientable',title:'可定向曲面 χ(g)',domain:'topology',level:3,tex:'\\chi=2-2g',blurb:'闭可定向曲面 Euler 特征。横轴亏格 g。'},
  params:[],
  fn:_=>g=>2-2*g,
  view:{cx:5,cy:-5,scale:30},
});
