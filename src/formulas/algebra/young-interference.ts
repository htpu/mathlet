import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'young-interference',title:'杨氏双缝干涉',domain:'algebra',level:3,tex:'I=I_0\\cos^2(\\frac{\\pi d\\sin\\theta}{\\lambda})',blurb:'横轴 sinθ，亮暗条纹。'},
  params:[n('d','缝距 d/λ',5,1,30,0.01)],
  fn:p=>x=>Math.cos(Math.PI*(p.d as number)*x)**2,
  view:{cx:0,cy:0.5,scale:200},
});
