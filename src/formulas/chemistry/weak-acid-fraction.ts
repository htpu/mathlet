import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'weak-acid-fraction',title:'弱酸解离分数 vs pH',domain:'chemistry',level:2,tex:'\\alpha=\\frac{K_a}{K_a+[H^+]}',blurb:'解离分数 α 随 pH 在 pKa 附近从 0 跨到 1。'},
  params:[n('pKa','pKa',4.76,0,14,0.01)],
  fn:p=>pH=>{const Ka=Math.pow(10,-(p.pKa as number));const H=Math.pow(10,-pH);return Ka/(Ka+H);},
  view:{cx:7,cy:0.5,scale:50},
});
