import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'shannon-channel',title:'Shannon 信道容量',domain:'crypto',level:3,tex:'C=B\\log_2(1+S/N)',blurb:'信噪比与容量。横轴 SNR (dB)。'},
  params:[n('B','带宽 B (Hz)',1000,100,10000,1)],
  fn:p=>x=>(p.B as number)*Math.log2(1+Math.pow(10,x/10)),
  view:{cx:20,cy:5000,scale:6},
});
