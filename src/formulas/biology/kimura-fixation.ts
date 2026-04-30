import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'kimura-fixation',title:'Kimura 固定概率',domain:'biology',level:4,tex:'u(p)=\\frac{1-e^{-4Nsp}}{1-e^{-4Ns}}',blurb:'选择性等位基因固定概率。'},
  params:[n('N','N',1000,10,10000,1,true),n('s','s',0.001,-0.01,0.05,0.0001)],
  fn:p=>x=>{if(x<0||x>1) return NaN; const Ns4=4*(p.N as number)*(p.s as number); if(Math.abs(Ns4)<1e-9) return x; return (1-Math.exp(-Ns4*x))/(1-Math.exp(-Ns4));},
  view:{cx:0.5,cy:0.5,scale:300},
});
