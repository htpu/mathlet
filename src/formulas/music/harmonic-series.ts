import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'harmonic-series',title:'泛音列',domain:'music',level:2,tex:'f_n=nf_0',blurb:'整数倍频率叠加。'},
  params:[i('N','泛音数',6,1,16)],
  fn:p=>x=>{let s=0; for(let n=1;n<=(p.N as number);n++) s+=Math.sin(2*Math.PI*n*x)/n; return s;},
  view:{cx:1,cy:0,scale:80},
});
