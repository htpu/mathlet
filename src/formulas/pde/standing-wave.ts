import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'standing-wave',title:'驻波（弦本征模）',domain:'pde',level:3,tex:'u_n(x,t)=\\sin(n\\pi x)\\cos(n\\pi ct)',blurb:'两端固定弦的 n 阶本征振型。'},
  params:[i('n','模式 n',3,1,12),n('t','时间 t',0,0,2,0.01),n('c','c',1,0.1,3,0.01)],
  fn:p=>x=>x>=0&&x<=1?Math.sin((p.n as number)*Math.PI*x)*Math.cos((p.n as number)*Math.PI*(p.c as number)*(p.t as number)):0,
  view:{cx:0.5,cy:0,scale:200},
});
