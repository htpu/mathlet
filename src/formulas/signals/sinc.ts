import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sinc',title:'sinc 函数',domain:'signals',level:1,tex:'\\text{sinc}(x)=\\frac{\\sin\\pi x}{\\pi x}',blurb:'矩形窗的傅里叶变换。'},
  params:[n('a','比例 a',1,0.1,3,0.01)],
  fn:p=>x=>{const u=(p.a as number)*x*Math.PI; return Math.abs(u)<1e-9?1:Math.sin(u)/u;},
  view:{cx:0,cy:0,scale:60},
});
