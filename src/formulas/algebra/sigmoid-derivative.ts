import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'sigmoid-derivative',title:'Sigmoid 导数',domain:'algebra',level:2,tex:"\\sigma'(x)=\\sigma(x)(1-\\sigma(x))",blurb:'峰值 1/4 在 x=0。'},
  params:[n('k','陡度',1,0.1,5,0.01)],
  fn:p=>x=>{const k=p.k as number; const s=1/(1+Math.exp(-k*x)); return k*s*(1-s);},
  view:{cx:0,cy:0.15,scale:80},
});
