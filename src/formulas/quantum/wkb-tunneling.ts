import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wkb-tunneling',title:'WKB 隧穿透射率',domain:'quantum',level:4,tex:'T\\approx e^{-2\\int\\sqrt{2m(V-E)}/\\hbar\\,dx}',blurb:'矩形势垒下透射率随能量。横轴 E/V。'},
  params:[n('a','a (nm)',1,0.1,5,0.01),n('V','V (eV)',1,0.1,10,0.01)],
  fn:p=>r=>{if(r>=1)return 1;if(r<=0)return 0;const V=p.V as number,a=(p.a as number)*1e-9;const m=9.109e-31,hbar=1.0546e-34;const k=Math.sqrt(2*m*(V*(1-r))*1.602e-19)/hbar;return Math.exp(-2*k*a);},
  view:{cx:0.5,cy:0.5,scale:300},
});
