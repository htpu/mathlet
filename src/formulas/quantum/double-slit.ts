import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'double-slit',title:'量子双缝干涉',domain:'quantum',level:3,tex:'P(x)\\propto\\cos^2(\\pi d\\sin\\theta/\\lambda)\\,\\mathrm{sinc}^2(\\pi a\\sin\\theta/\\lambda)',blurb:'电子/光子衍射条纹。'},
  params:[n('d','缝距 d/λ',5,1,30,0.01),n('a','缝宽 a/λ',1,0.2,5,0.01)],
  fn:p=>x=>{const u=Math.PI*(p.a as number)*x; const c=Math.cos(Math.PI*(p.d as number)*x)**2; const s=Math.abs(u)<1e-9?1:(Math.sin(u)/u)**2; return c*s;},
  view:{cx:0,cy:0.5,scale:200},
});
