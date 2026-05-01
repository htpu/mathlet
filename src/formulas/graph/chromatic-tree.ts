import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'chromatic-tree',title:'树的色多项式',domain:'graph',level:3,tex:'P(T,k)=k(k-1)^{n-1}',blurb:'n 节点的树用 k 种颜色合法染色数。横轴 k。'},
  params:[i('n','n (节点)',5,2,20)],
  fn:p=>k=>{const v=Math.floor(k);if(v<1)return NaN;return v*Math.pow(v-1,(p.n as number)-1);},
  view:{cx:5,cy:1000,scale:40},
});
