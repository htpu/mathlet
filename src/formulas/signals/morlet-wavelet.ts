import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'morlet-wavelet',title:'Morlet 小波 (实部)',domain:'signals',level:4,tex:'\\psi(t)=e^{-t^2/2}\\cos(\\omega t)',blurb:'高斯包络 × 振荡。'},
  params:[n('omega','ω',5,1,15,0.05)],
  fn:p=>x=>Math.exp(-x*x/2)*Math.cos((p.omega as number)*x),
  view:{cx:0,cy:0,scale:80},
});
