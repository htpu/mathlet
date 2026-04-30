import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wormlike-chain',title:'蠕虫状链 (WLC)',domain:'biology',level:4,tex:'\\langle R^2\\rangle=2L_pL-2L_p^2(1-e^{-L/L_p})',blurb:'刚柔过渡，Lp 持久长度。'},
  params:[n('Lp','Lp',1,0.1,10,0.01)],
  fn:p=>L=>{if(L<=0) return 0; const Lp=p.Lp as number; return 2*Lp*L-2*Lp*Lp*(1-Math.exp(-L/Lp));},
  view:{cx:25,cy:25,scale:8},
});
