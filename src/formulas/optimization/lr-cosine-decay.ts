import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'lr-cosine-decay',title:'余弦学习率衰减',domain:'optimization',level:2,tex:'\\eta_t=\\eta_{min}+\\tfrac{1}{2}(\\eta_{max}-\\eta_{min})(1+\\cos\\tfrac{\\pi t}{T})',blurb:'按余弦从 ηmax → ηmin。横轴 t/T。'},
  params:[n('etamax','ηmax',1,0.01,1,0.001),n('etamin','ηmin',0.01,0,0.5,0.001)],
  fn:p=>x=>{if(x<0||x>1)return NaN;const a=p.etamax as number,b=p.etamin as number;return b+0.5*(a-b)*(1+Math.cos(Math.PI*x));},
  view:{cx:0.5,cy:0.5,scale:300},
});
