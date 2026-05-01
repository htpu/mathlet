import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lattice-shortest-vector',title:'Minkowski 最短向量界',domain:'crypto',level:4,tex:'\\|v_1\\|\\le\\gamma_n\\,\\det(L)^{1/n}',blurb:'格中最短向量长度上界。横轴维度 n（Hermite 常数近似 √(n/(πe)) det^{1/n}）。'},
  params:[],
  fn:_=>n=>n<=1?NaN:Math.sqrt(n/(Math.PI*Math.E)),
  view:{cx:50,cy:3,scale:6},
});
