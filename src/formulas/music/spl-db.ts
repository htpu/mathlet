import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'spl-db',title:'声压级 SPL (dB)',domain:'music',level:2,tex:'L_p=20\\log_{10}\\frac{p}{p_{ref}}',blurb:'参考 p_ref = 20 µPa。横轴 log10 (p / p_ref)。'},
  params:[],
  fn:_=>x=>20*x,
  view:{cx:3,cy:60,scale:60},
});
