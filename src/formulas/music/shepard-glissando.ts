import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'shepard-glissando',title:'Shepard 音 (上升幻觉)',domain:'music',level:3,tex:'A_n(t)=e^{-((n+t)\\bmod 1-0.5)^2/(2\\sigma^2)}',blurb:'多倍频高斯包络叠加，听上去无限上升。横轴 octave 偏移。'},
  params:[n('t','t',0.3,0,1,0.001)],
  fn:p=>x=>{const r=((x+(p.t as number))%1+1)%1-0.5;return Math.exp(-r*r/0.08);},
  view:{cx:0,cy:0.5,scale:200},
});
