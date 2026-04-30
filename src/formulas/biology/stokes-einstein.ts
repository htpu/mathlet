import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'stokes-einstein',title:'Stokes-Einstein 关系',domain:'biology',level:3,tex:'D=\\frac{k_BT}{6\\pi\\eta r}',blurb:'扩散系数反比于半径。横轴 r (nm)。'},
  params:[n('T','T (K)',310,250,400,0.1),n('eta','η (mPa·s)',1,0.1,10,0.01)],
  fn:p=>r=>{if(r<=0) return NaN; const kB=1.381e-23, eta=(p.eta as number)*1e-3, R=r*1e-9; return kB*(p.T as number)/(6*Math.PI*eta*R)*1e12;},
  view:{cx:5,cy:50,scale:30},
});
