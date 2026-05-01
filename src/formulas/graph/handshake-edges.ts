import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'handshake-edges',title:'完全图最大边数',domain:'graph',level:1,tex:'|E|=\\binom{n}{2}=\\frac{n(n-1)}{2}',blurb:'n 个节点的完全图 K_n 的边数。横轴 n。'},
  params:[i('span','axis',40,5,100)],
  fn:_=>n=>{const v=Math.floor(n);if(v<0)return NaN;return v*(v-1)/2;},
  view:{cx:20,cy:200,scale:8},
});
