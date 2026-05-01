import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'aes-keyspace',title:'AES 密钥空间 (log10)',domain:'crypto',level:2,tex:'|K|=2^{n}',blurb:'对称密钥空间随位长指数增长。横轴 n bits。'},
  params:[],
  fn:_=>n=>n<=0?NaN:n*Math.log10(2),
  view:{cx:128,cy:38,scale:2},
});
