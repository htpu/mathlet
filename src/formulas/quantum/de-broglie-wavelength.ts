import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
// x = log10(p [kg·m/s])  →  y = log10(λ [nm])
export default fn1d({
  meta:{slug:'de-broglie-wavelength',title:'de Broglie 波长',domain:'quantum',level:2,tex:'\\lambda=\\frac{h}{p}',blurb:'物质波波长随动量倒数。两轴均为 log10：x=log₁₀ p (kg·m/s)，y=log₁₀ λ (nm)。'},
  params:[i('span','axis',1,1,10)],
  fn:_=>x=>{const p=Math.pow(10,x); if(p<=0) return NaN; const lam_m=6.626e-34/p; return Math.log10(lam_m*1e9);},
  view:{cx:-24,cy:0,scale:25},
});
