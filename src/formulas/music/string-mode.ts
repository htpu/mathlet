import { i, n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'string-mode',title:'弦振动驻波',domain:'music',level:2,tex:'y_n(x,t)=\\sin\\frac{n\\pi x}{L}\\cos(2\\pi f_n t)',blurb:'两端固定弦的第 n 阶驻波瞬时形状。横轴 x ∈ [0,L]。'},
  params:[i('n','n',3,1,12),n('t','t',0,0,1,0.001)],
  fn:p=>x=>Math.sin((p.n as number)*Math.PI*x)*Math.cos(2*Math.PI*(p.n as number)*(p.t as number)),
  view:{cx:0.5,cy:0,scale:200},
});
