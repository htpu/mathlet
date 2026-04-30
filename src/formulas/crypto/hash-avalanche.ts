import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'hash-avalanche',title:'雪崩效应',domain:'crypto',level:2,tex:'\\text{Hamming distance}/n\\approx 0.5',blurb:'1 bit 输入变化 → 输出 ~50% bit 翻转。'},
  params:[n('q','质量 q',0.5,0,1,0.001)],
  fn:p=>x=>{const q=p.q as number; const d=Math.abs(x-q); return Math.exp(-50*d*d);},
  view:{cx:0.5,cy:0.5,scale:300},
});
