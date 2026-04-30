import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fst-curve',title:'Fst 群体分化',domain:'biology',level:3,tex:'F_{ST}=1-(1-1/(2N))^t',blurb:'孤立群体分化随代数。'},
  params:[n('N','N',100,10,1000,1)],
  fn:p=>t=>{if(t<0) return NaN; return 1-Math.pow(1-1/(2*(p.N as number)),t);},
  view:{cx:200,cy:0.5,scale:1.5},
});
