import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'coalescent-time',title:'共祖时间分布',domain:'biology',level:4,tex:'P(T_{MRCA}=t)\\propto \\binom{k}{2}e^{-\\binom{k}{2}t/(2N)}',blurb:'k 序列的最近共祖时间指数分布。'},
  params:[n('N','N',1000,10,10000,1,true),n('k','k',2,2,30,1)],
  fn:p=>t=>{if(t<0) return 0; const k=p.k as number, N=p.N as number; const r=k*(k-1)/2/(2*N); return r*Math.exp(-r*t);},
  view:{cx:2000,cy:0.0005,scale:0.1},
});
