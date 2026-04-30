import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'holling-type-ii',title:'Holling 第二型反应',domain:'biology',level:2,tex:'f(N)=\\frac{aN}{1+aT_hN}',blurb:'捕食率随猎物饱和。'},
  params:[n('a','a',0.5,0.01,2,0.01),n('Th','Th',0.5,0.01,2,0.01)],
  fn:p=>x=>{if(x<0) return NaN; const a=p.a as number, Th=p.Th as number; return a*x/(1+a*Th*x);},
  view:{cx:5,cy:1,scale:50},
});
