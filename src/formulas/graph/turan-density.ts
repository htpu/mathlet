import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'turan-density',title:'Turán 边数上界',domain:'graph',level:4,tex:'\\text{ex}(n,K_{r+1})\\le\\left(1-\\frac{1}{r}\\right)\\frac{n^2}{2}',blurb:'不含 K_{r+1} 的最大边数。横轴 n。'},
  params:[i('r','r',3,2,10)],
  fn:p=>n=>{const r=p.r as number;return (1-1/r)*n*n/2;},
  view:{cx:50,cy:1500,scale:6},
});
