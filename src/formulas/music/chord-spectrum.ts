import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'chord-spectrum',title:'三和弦频谱',domain:'music',level:2,tex:'C+E+G',blurb:'大三和弦的合成波形。'},
  params:[n('f0','基频 f0',262,100,500,0.1)],
  fn:p=>t=>{const f=p.f0 as number; return (Math.sin(2*Math.PI*f*t)+Math.sin(2*Math.PI*f*5/4*t)+Math.sin(2*Math.PI*f*3/2*t))/3;},
  view:{cx:0.005,cy:0,scale:8000},
});
