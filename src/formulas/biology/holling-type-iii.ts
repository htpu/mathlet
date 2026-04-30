import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'holling-type-iii',title:'Holling 第三型反应',domain:'biology',level:3,tex:'f(N)=\\frac{aN^2}{1+aT_hN^2}',blurb:'sigmoid 捕食率（学习/切换）。'},
  params:[n('a','a',0.5,0.01,2,0.01),n('Th','Th',0.5,0.01,2,0.01)],
  fn:p=>x=>{if(x<0) return NaN; const a=p.a as number, Th=p.Th as number, x2=x*x; return a*x2/(1+a*Th*x2);},
  view:{cx:5,cy:1,scale:50},
});
