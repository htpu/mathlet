import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'de-sitter-scale',title:'de Sitter 指数膨胀',domain:'gr',level:3,tex:'a(t)=e^{Ht}',blurb:'纯 Λ 主导时尺度因子指数增长。横轴 Ht。'},
  params:[n('H','H',1,0.1,3,0.01)],
  fn:p=>t=>Math.exp((p.H as number)*t),
  view:{cx:0,cy:1,scale:80},
});
