import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'emax-model',title:'药效 Emax 模型',domain:'biology',level:2,tex:'E=\\frac{E_{max}D}{ED_{50}+D}',blurb:'药效随剂量饱和。'},
  params:[n('Emax','Emax',100,1,200,0.1),n('ED50','ED50',5,0.1,50,0.01)],
  fn:p=>x=>{if(x<0) return NaN; return (p.Emax as number)*x/((p.ED50 as number)+x);},
  view:{cx:25,cy:50,scale:6},
});
