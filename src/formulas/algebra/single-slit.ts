import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'single-slit',title:'单缝衍射',domain:'algebra',level:3,tex:'I=I_0\\,\\mathrm{sinc}^2(\\frac{\\pi a\\sin\\theta}{\\lambda})',blurb:'中央亮纹宽，副极大快速衰减。'},
  params:[n('a','缝宽 a/λ',4,0.5,20,0.01)],
  fn:p=>x=>{const u=Math.PI*(p.a as number)*x; if(Math.abs(u)<1e-9) return 1; const s=Math.sin(u)/u; return s*s;},
  view:{cx:0,cy:0.5,scale:200},
});
