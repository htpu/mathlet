import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'neutral-substitution-rate',title:'中性替代率',domain:'biology',level:3,tex:'k=\\mu',blurb:'Kimura: 中性突变固定率等于突变率。横轴 μ。'},
  params:[],
  fn:()=>m=>m,
  view:{cx:0.5e-8,cy:0.5e-8,scale:5e10},
});
