import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'resonant-q',title:'共振峰 Q 值',domain:'music',level:3,tex:'|H(f)|=\\frac{1}{\\sqrt{(1-(f/f_0)^2)^2+(f/(Qf_0))^2}}',blurb:'二阶谐振滤波幅度。x = log10(f/f0)。'},
  params:[n('Q','Q',5,0.5,30,0.01)],
  fn:p=>x=>{const r=Math.pow(10,x);const Q=p.Q as number;return 20*Math.log10(1/Math.sqrt(Math.pow(1-r*r,2)+Math.pow(r/Q,2)));},
  view:{cx:0,cy:0,scale:80},
});
