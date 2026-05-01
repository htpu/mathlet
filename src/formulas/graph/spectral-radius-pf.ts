import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'spectral-radius-pf',title:'Perron-Frobenius 谱半径界',domain:'graph',level:4,tex:'\\sqrt{d_{max}}\\le\\rho(A)\\le d_{max}',blurb:'图谱半径夹在最大度的 √d 与 d 之间。横轴 d_max。'},
  params:[],
  fn:_=>d=>d<0?NaN:Math.sqrt(d),
  fns:[{color:'#ffb454',fn:()=>d=>d<0?NaN:Math.sqrt(d)},{color:'#39bae6',fn:()=>d=>d<0?NaN:d}],
  view:{cx:25,cy:25,scale:8},
});
