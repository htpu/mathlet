import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'buffer-capacity',title:'缓冲容量 β',domain:'chemistry',level:3,tex:'\\beta=2.303\\,\\frac{C\\,K_a[H^+]}{(K_a+[H^+])^2}',blurb:'弱酸缓冲容量在 pH = pKa 处取最大。'},
  params:[n('pKa','pKa',4.76,1,12,0.01),n('C','C(M)',0.1,0.01,1,0.01)],
  fn:p=>pH=>{const Ka=Math.pow(10,-(p.pKa as number));const H=Math.pow(10,-pH);return 2.303*(p.C as number)*Ka*H/Math.pow(Ka+H,2);},
  view:{cx:7,cy:0.05,scale:50},
});
