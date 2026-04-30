import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'allee-effect',title:'Allee 效应',domain:'biology',level:3,tex:'\\frac{dN}{dt}=rN(1-\\frac{N}{K})(\\frac{N}{A}-1)',blurb:'低密度负增长，需阈值 A。'},
  params:[n('r','r',0.5,0.05,2,0.01),n('K','K',100,10,500,1),n('A','A',20,1,80,0.1)],
  fn:p=>x=>{const r=p.r as number, K=p.K as number, A=p.A as number; return r*x*(1-x/K)*(x/A-1);},
  view:{cx:60,cy:0,scale:5},
});
