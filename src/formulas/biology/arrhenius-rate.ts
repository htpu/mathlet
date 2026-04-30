import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'arrhenius-rate',title:'Arrhenius 速率方程',domain:'biology',level:3,tex:'k=A e^{-E_a/RT}',blurb:'温度对反应速率指数依赖。'},
  params:[n('A','A',1e8,1e3,1e12,1,true),n('Ea','Ea (kJ/mol)',50,1,200,0.1)],
  fn:p=>T=>{const R=8.314e-3; if(T<=0) return NaN; return (p.A as number)*Math.exp(-(p.Ea as number)/(R*T));},
  view:{cx:300,cy:5,scale:0.5},
});
