import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'moore-bound',title:'Moore 界 (度 d, 直径 k)',domain:'graph',level:4,tex:'n\\le 1+d\\sum_{i=0}^{k-1}(d-1)^i',blurb:'给定度上限 d 与直径 k，最多可容纳节点数 (log10)。横轴 k。'},
  params:[i('d','d',3,2,10)],
  fn:p=>k=>{const d=p.d as number;const v=Math.floor(k);if(v<1)return NaN;let s=1;for(let i=0;i<v;i++) s+=d*Math.pow(d-1,i);return Math.log10(s);},
  view:{cx:6,cy:5,scale:50},
});
