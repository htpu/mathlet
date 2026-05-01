import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'flory-huggins',title:'Flory-Huggins 混合自由能',domain:'chemistry',level:4,tex:'\\Delta G_{mix}/RT=\\frac{\\phi_1}{N_1}\\ln\\phi_1+\\frac{\\phi_2}{N_2}\\ln\\phi_2+\\chi\\phi_1\\phi_2',blurb:'高分子溶液混合自由能。横轴 φ₁。'},
  params:[n('chi','χ',0.5,-2,2,0.01),n('N1','N₁',100,1,1000,1),n('N2','N₂',1,1,1000,1)],
  fn:p=>f=>{if(f<=0||f>=1)return 0;const N1=p.N1 as number,N2=p.N2 as number;return f/N1*Math.log(f)+(1-f)/N2*Math.log(1-f)+(p.chi as number)*f*(1-f);},
  view:{cx:0.5,cy:-0.1,scale:300},
});
