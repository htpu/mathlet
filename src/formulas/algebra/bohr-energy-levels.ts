import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bohr-energy-levels',title:'玻尔能级',domain:'algebra',level:2,tex:'E_n=-\\frac{13.6}{n^2}\\,\\mathrm{eV}',blurb:'氢原子能量随 n 收敛到 0。'},
  params:[],
  fn:()=>n=>{if(n<1) return NaN; return -13.6/(n*n);},
  view:{cx:5,cy:-7,scale:30},
});
