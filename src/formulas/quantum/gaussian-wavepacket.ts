import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'gaussian-wavepacket',title:'高斯波包 (实部)',domain:'quantum',level:3,tex:'\\psi(x)=e^{-x^2/(2\\sigma^2)}\\cos(kx)',blurb:'位置局域化波包，平均动量 ℏk。'},
  params:[n('k','k',5,0,15,0.01),n('sig','σ',1,0.2,3,0.01)],
  fn:p=>x=>Math.exp(-x*x/(2*(p.sig as number)**2))*Math.cos((p.k as number)*x),
  view:{cx:0,cy:0,scale:50},
});
