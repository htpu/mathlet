import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gc-content-window',title:'GC 含量滑窗',domain:'biology',level:2,tex:'GC(x)=\\frac{1}{w}\\sum_{i=x}^{x+w}[base\\in\\{G,C\\}]',blurb:'示意 sigmoid 切换的 GC 岛。'},
  params:[n('center','中心',0,-5,5,0.01),n('w','窗宽',1,0.1,5,0.01)],
  fn:p=>x=>{const c=p.center as number, w=p.w as number; return 0.4+0.4/(1+Math.exp(-(x-c)/w));},
  view:{cx:0,cy:0.5,scale:50},
});
