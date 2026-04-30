import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'codon-third-position',title:'密码子第三位中性',domain:'biology',level:3,tex:'GC_3 \\sim p_{GC}',blurb:'密码子第三位 GC 含量近中性。横轴 GC%。'},
  params:[n('bias','偏倚',1,0.1,3,0.01)],
  fn:p=>x=>{if(x<0||x>1) return NaN; const b=p.bias as number; return Math.pow(x,b)/(Math.pow(x,b)+Math.pow(1-x,b));},
  view:{cx:0.5,cy:0.5,scale:300},
});
