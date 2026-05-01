import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'seifert-genus-bound',title:'Seifert 亏格下界',domain:'topology',level:4,tex:'g(K)\\ge\\frac{\\deg\\Delta_K}{2}',blurb:'结的 Seifert 亏格 ≥ Alexander 多项式次数的一半。'},
  params:[],
  fn:_=>d=>d<0?NaN:d/2,
  view:{cx:5,cy:2,scale:30},
});
