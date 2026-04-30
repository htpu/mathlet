import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'snell-angle',title:'斯涅尔折射定律',domain:'algebra',level:2,tex:'n_1\\sin\\theta_1=n_2\\sin\\theta_2',blurb:'横轴入射角 θ₁ (deg)，纵轴折射角 θ₂。'},
  params:[n('n1','n₁',1,0.5,3,0.01),n('n2','n₂',1.5,0.5,3,0.01)],
  fn:p=>x=>{const s=(p.n1 as number)/(p.n2 as number)*Math.sin(x*Math.PI/180); if(Math.abs(s)>1) return NaN; return Math.asin(s)*180/Math.PI;},
  view:{cx:45,cy:30,scale:5},
});
