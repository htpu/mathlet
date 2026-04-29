import { i, n } from '../types';
import { fn1d } from '../../templates/fn1d';
function haarParent(t:number){return (t>=0&&t<0.5)?1:(t>=0.5&&t<1)?-1:0;}
function haarPsi(j:number,k:number,t:number){return Math.pow(2,j/2)*haarParent(Math.pow(2,j)*t-k);}
export default fn1d({
  meta:{slug:'wavelet-haar',title:'Haar 小波',domain:'signals',level:4,tex:'\\psi_{j,k}(t)=2^{j/2}\\psi(2^j t-k)',blurb:'尺度 j 和位移 k。'},
  params:[i('j','尺度 j',2,0,6),i('k','位移 k',1,0,32)],
  fn:p=>t=>haarPsi(p.j as number, p.k as number, t),
  view:{cx:0.5,cy:0,scale:300},
});
