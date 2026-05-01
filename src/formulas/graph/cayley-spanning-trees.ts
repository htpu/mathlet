import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'cayley-spanning-trees',title:'Cayley 公式 (生成树数)',domain:'graph',level:4,tex:'\\tau(K_n)=n^{n-2}',blurb:'完全图 K_n 的生成树数（对数轴）。'},
  params:[i('span','axis',12,3,18)],
  fn:_=>n=>{const v=Math.floor(n);if(v<2)return NaN;return Math.log10(Math.pow(v,v-2));},
  view:{cx:8,cy:5,scale:30},
});
