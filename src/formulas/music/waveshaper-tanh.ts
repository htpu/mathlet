import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'waveshaper-tanh',title:'tanh 软削波',domain:'music',level:2,tex:'y=\\tanh(k\\,x)',blurb:'吉他/合成器常用的非线性饱和。k 控驱动量。'},
  params:[n('k','k',3,0.5,20,0.01)],
  fn:p=>x=>Math.tanh((p.k as number)*x),
  view:{cx:0,cy:0,scale:120},
});
