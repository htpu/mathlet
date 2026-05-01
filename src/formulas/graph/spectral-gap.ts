import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'spectral-gap',title:'扩展图谱隙界',domain:'graph',level:4,tex:'h(G)\\ge\\frac{d-\\lambda_2}{2}',blurb:'Cheeger 不等式下界：扩展常数随谱隙增长。'},
  params:[i('d','d',6,3,30)],
  fn:p=>L=>(p.d as number-L)/2,
  view:{cx:3,cy:1.5,scale:80},
});
