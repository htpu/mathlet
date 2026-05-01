import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'wood-air-resonance',title:'Helmholtz 共鸣 (吉他/小提琴体)',domain:'music',level:3,tex:'f=\\frac{c}{2\\pi}\\sqrt{\\frac{A}{V L}}',blurb:'乐器腔体 Helmholtz 共鸣频率。横轴 V (cm³)。'},
  params:[n('A','A(cm²)',6,0.5,60,0.01),n('L','L(cm)',1,0.1,10,0.01)],
  fn:p=>V=>V<=0?NaN:34300/(2*Math.PI)*Math.sqrt((p.A as number)/(V*(p.L as number))),
  view:{cx:1500,cy:200,scale:0.5},
});
