import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'fletcher-munson',title:'Fletcher-Munson 等响曲线 (近似)',domain:'music',level:3,tex:'L_p(f)=L_0+a\\log_{10}(f/f_0)^2',blurb:'人耳对低频敏感度下降——简化的等响曲线。x = log10 f (Hz)。'},
  params:[n('phon','phon',60,30,90,0.1)],
  fn:p=>x=>{const f=Math.pow(10,x);const phon=p.phon as number;return phon+15*Math.pow(Math.log10(f/3500),2);},
  view:{cx:3,cy:60,scale:120},
});
