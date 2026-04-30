import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'adsr-envelope',title:'ADSR 包络',domain:'music',level:2,tex:'A\\to D\\to S\\to R',blurb:'合成器音量包络。'},
  params:[n('A','attack',0.1,0.01,1,0.001),n('D','decay',0.2,0.01,1,0.001),n('S','sustain',0.6,0,1,0.01),n('R','release',0.3,0.01,1,0.001)],
  fn:p=>t=>{const A=p.A as number, D=p.D as number, S=p.S as number, R=p.R as number; const release_start=2;
    if(t<0) return 0;
    if(t<A) return t/A;
    if(t<A+D) return 1-(1-S)*(t-A)/D;
    if(t<release_start) return S;
    if(t<release_start+R) return S*(1-(t-release_start)/R);
    return 0;},
  view:{cx:1.5,cy:0.5,scale:130},
});
