import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'friedmann-flat',title:'Friedmann (平坦宇宙)',domain:'gr',level:4,tex:'H(a)=H_0\\sqrt{\\Omega_m a^{-3}+\\Omega_\\Lambda}',blurb:'Hubble 参数随尺度因子。横轴 a。'},
  params:[n('Om','Ωm',0.3,0,1,0.01),n('Ol','ΩΛ',0.7,0,1,0.01),n('H0','H₀',70,40,100,0.1)],
  fn:p=>a=>a<=0?NaN:(p.H0 as number)*Math.sqrt((p.Om as number)/(a*a*a)+(p.Ol as number)),
  view:{cx:1,cy:70,scale:80},
});
