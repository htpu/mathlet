import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'am-modulation',title:'AM 调幅',domain:'signals',level:2,tex:'(1+m\\cos\\omega_m t)\\cos\\omega_c t',blurb:'载波 ω_c × 包络（1 + m cos ω_m t）。'},
  params:[n('fc','载波 fc',8,1,30,0.1),n('fm','调制 fm',1,0.1,5,0.05),n('m','调制度',0.6,0,1,0.01)],
  fn:p=>x=>(1+(p.m as number)*Math.cos(2*Math.PI*(p.fm as number)*x))*Math.cos(2*Math.PI*(p.fc as number)*x),
  view:{cx:0.5,cy:0,scale:200},
});
