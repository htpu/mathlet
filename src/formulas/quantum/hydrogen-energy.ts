import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hydrogen-energy',title:'氢原子能级 (Rydberg)',domain:'quantum',level:3,tex:'E_n=-13.6/n^2\\text{ eV}',blurb:'氢原子主量子数能级。'},
  params:[],
  fn:()=>n=>{if(n<1) return NaN; return -13.6/(n*n);},
  view:{cx:5,cy:-7,scale:30},
});
