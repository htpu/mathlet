import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'von-bertalanffy',title:'von Bertalanffy 生长',domain:'biology',level:2,tex:'L(t)=L_\\infty(1-e^{-k(t-t_0)})',blurb:'渐近生长曲线（鱼类等）。'},
  params:[n('Linf','L∞',100,10,200,1),n('k','k',0.3,0.01,2,0.01),n('t0','t0',0,-2,2,0.01)],
  fn:p=>t=>{const L=p.Linf as number, k=p.k as number, t0=p.t0 as number; return L*(1-Math.exp(-k*(t-t0)));},
  view:{cx:5,cy:50,scale:30},
});
