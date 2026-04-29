import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wavelet-mexican',title:'墨西哥帽小波',domain:'signals',level:4,tex:'\\psi(t)=(1-t^2)e^{-t^2/2}',blurb:'高斯二阶导。'},
  params:[n('s','尺度',1,0.3,3,0.01),n('t','位移',0,-3,3,0.01)],
  fn:p=>x=>{const u=(x-(p.t as number))/(p.s as number); return (1-u*u)*Math.exp(-u*u/2)/Math.sqrt(p.s as number);},
  view:{cx:0,cy:0,scale:80},
});
