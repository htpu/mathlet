import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'decibel',title:'dB 标度',domain:'signals',level:1,tex:'L=20\\log_{10}(A/A_0)',blurb:'幅度比与分贝换算。'},
  params:[n('A0','A₀',1,0.001,10,0.001,true)],
  fn:p=>x=>20*Math.log10(Math.max(1e-9, x)/(p.A0 as number)),
  view:{cx:5,cy:10,scale:30},
});
