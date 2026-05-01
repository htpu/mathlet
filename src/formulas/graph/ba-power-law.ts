import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'ba-power-law',title:'Barabási-Albert 度分布尾',domain:'graph',level:4,tex:'P(k)\\sim 2m^2 k^{-3}',blurb:'优先连接产生 −3 幂律。双对数：x=log10 k, y=log10 P。'},
  params:[n('m','m',2,1,10,1)],
  fn:p=>x=>{const k=Math.pow(10,x);if(k<1)return NaN;return Math.log10(2*Math.pow(p.m as number,2)/Math.pow(k,3));},
  view:{cx:1.5,cy:-3,scale:80},
});
