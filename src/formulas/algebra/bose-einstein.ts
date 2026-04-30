import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'bose-einstein',title:'玻色-爱因斯坦分布',domain:'algebra',level:3,tex:'n(E)=\\frac{1}{e^{(E-\\mu)/kT}-1}',blurb:'玻色子占据率，μ→0 出现凝聚。'},
  params:[n('mu','μ',-0.5,-3,-0.01,0.01)],
  fn:p=>x=>{const v=Math.exp(x-(p.mu as number))-1; return v<=0?NaN:1/v;},
  view:{cx:0,cy:2,scale:60},
});
