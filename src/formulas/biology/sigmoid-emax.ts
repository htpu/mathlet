import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sigmoid-emax',title:'Sigmoid Emax (Hill)',domain:'biology',level:3,tex:'E=\\frac{E_{max}D^\\gamma}{ED_{50}^\\gamma+D^\\gamma}',blurb:'sigmoidicity γ 决定陡度。'},
  params:[n('Emax','Emax',100,1,200,0.1),n('ED50','ED50',5,0.1,50,0.01),n('g','γ',2,0.5,8,0.01)],
  fn:p=>x=>{if(x<=0) return 0; const g=p.g as number, k=Math.pow(x,g); return (p.Emax as number)*k/(Math.pow(p.ED50 as number,g)+k);},
  view:{cx:25,cy:50,scale:6},
});
