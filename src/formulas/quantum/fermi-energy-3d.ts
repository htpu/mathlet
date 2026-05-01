import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fermi-energy-3d',title:'三维 Fermi 能',domain:'quantum',level:4,tex:'E_F=\\frac{\\hbar^2}{2m}(3\\pi^2 n)^{2/3}',blurb:'电子气 Fermi 能随密度 n^{2/3}。横轴 log10 n (m⁻³)，纵轴 log10 E_F (eV)。'},
  params:[],
  fn:_=>x=>{const n=Math.pow(10,x);if(n<=0)return NaN;const Ef=Math.pow(1.0546e-34,2)/(2*9.109e-31)*Math.pow(3*Math.PI*Math.PI*n,2/3)/1.602e-19;return Math.log10(Ef);},
  view:{cx:28,cy:0,scale:25},
});
