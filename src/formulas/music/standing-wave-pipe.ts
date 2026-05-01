import { i, n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'standing-wave-pipe',title:'闭管驻波频率 fₙ',domain:'music',level:2,tex:'f_n=\\frac{(2n-1)c}{4L}',blurb:'一端闭管基频与奇次谐波。横轴 n。'},
  params:[n('L','L (m)',0.6,0.05,3,0.001)],
  fn:p=>n=>{const v=Math.floor(n);if(v<1)return NaN;return (2*v-1)*343/(4*(p.L as number));},
  view:{cx:5,cy:1500,scale:30},
});
