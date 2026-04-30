import { n } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'galton-watson-extinction',title:'Galton-Watson 灭绝概率',domain:'biology',level:4,tex:'q=e^{\\lambda(q-1)}',blurb:'Poisson 后代分支过程灭绝率。'},
  params:[],
  fn:()=>lam=>{if(lam<=1) return 1; let q=0.5; for(let i=0;i<200;i++){const f=Math.exp(lam*(q-1))-q; const fp=lam*Math.exp(lam*(q-1))-1; q-=f/fp; if(q<0) q=0.001; if(q>1) q=0.999;} return q;},
  view:{cx:2,cy:0.5,scale:80},
});
