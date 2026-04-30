import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gravitational-wave-strain',title:'引力波 chirp',domain:'gr',level:4,tex:'h(t)\\propto t^{-1/4}\\cos(\\phi(t))',blurb:'双星合并波形频率上升。'},
  params:[n('A','A',1,0.1,5,0.01)],
  fn:p=>t=>{if(t>=0) return 0; const tt=-t; return (p.A as number)*Math.pow(tt+0.05,-0.25)*Math.cos(2*Math.pow(tt+0.05,-0.625)*5);},
  view:{cx:-1,cy:0,scale:80},
});
