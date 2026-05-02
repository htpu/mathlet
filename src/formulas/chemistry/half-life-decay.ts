import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'half-life-decay',title:'放射性衰变半衰期',domain:'chemistry',level:2,tex:'N(t)=N_0\\left(\\tfrac{1}{2}\\right)^{t/t_{1/2}}',blurb:'横轴 t / t₁/₂。'},
  params:[],
  fn:_=>x=>Math.pow(0.5,x),
  view:{cx:3,cy:0.5,scale:80},
});
