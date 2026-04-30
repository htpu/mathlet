import { n, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sine-square-saw',title:'波形对比',domain:'music',level:1,tex:'\\sin/\\square/\\text{saw}',blurb:'基本合成器波形。'},
  params:[sel('w','波形','sine',[{value:'sine',label:'sine'},{value:'square',label:'square'},{value:'saw',label:'saw'},{value:'tri',label:'tri'}]),n('f','f',2,0.1,10,0.01)],
  fn:p=>t=>{const f=p.f as number, x=2*Math.PI*f*t; const w=p.w; if(w==='sine') return Math.sin(x); if(w==='square') return Math.sign(Math.sin(x)); if(w==='saw') return 2*((f*t)%1)-1; return 4*Math.abs(((f*t)+0.25)%1-0.5)-1;},
  view:{cx:1,cy:0,scale:100},
});
