import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'girth-moore',title:'围长 Moore 界',domain:'graph',level:5,tex:'n\\ge 1+d\\sum_{i=0}^{(g-3)/2}(d-1)^i',blurb:'给定度 d 与奇围长 g 的最少节点数 (log10)。横轴 g。'},
  params:[i('d','d',3,3,10)],
  fn:p=>g=>{const d=p.d as number;const v=Math.floor(g);if(v<3||v%2===0)return NaN;let s=1;for(let i=0;i<=(v-3)/2;i++) s+=d*Math.pow(d-1,i);return Math.log10(s);},
  view:{cx:7,cy:2,scale:50},
});
