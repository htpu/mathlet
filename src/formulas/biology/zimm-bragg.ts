import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'zimm-bragg',title:'Zimm-Bragg 螺旋-线团转变',domain:'biology',level:4,tex:'\\theta=\\frac{1}{2}+\\frac{s-1}{2\\sqrt{(s-1)^2+4\\sigma s}}',blurb:'肽链螺旋分数随 s。σ 控锐度。'},
  params:[n('sig','σ',1e-3,1e-5,1,0.0001,true)],
  fn:p=>s=>{const sig=p.sig as number; const d=Math.sqrt((s-1)*(s-1)+4*sig*s); return 0.5+(s-1)/(2*d);},
  view:{cx:1,cy:0.5,scale:300},
});
