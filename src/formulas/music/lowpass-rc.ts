import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lowpass-rc',title:'RC 低通频率响应',domain:'music',level:2,tex:'|H(f)|=\\frac{1}{\\sqrt{1+(f/f_c)^2}}',blurb:'一阶 RC 低通幅度响应（dB）。横轴 log10(f/fc)。'},
  params:[],
  fn:_=>x=>{const r=Math.pow(10,x);return 20*Math.log10(1/Math.sqrt(1+r*r));},
  view:{cx:0,cy:-15,scale:80},
});
