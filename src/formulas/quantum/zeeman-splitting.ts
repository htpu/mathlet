import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'zeeman-splitting',title:'正常 Zeeman 分裂',domain:'quantum',level:3,tex:'\\Delta E=m_l\\,\\mu_B B',blurb:'磁场中能级劈裂。横轴磁场 B (T)。'},
  params:[i('ml','mₗ',1,-3,3)],
  fn:p=>B=>(p.ml as number)*9.274e-24*B/1.602e-19, // eV
  view:{cx:1,cy:0,scale:300},
});
