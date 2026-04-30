import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function H(n:number,x:number):number{if(n===0) return 1; if(n===1) return 2*x; return 2*x*H(n-1,x)-2*(n-1)*H(n-2,x);}
function fact(n:number):number{return n<=1?1:n*fact(n-1);}
export default fn1d({
  meta:{slug:'qho-wavefn',title:'谐振子波函数 |ψn|²',domain:'quantum',level:4,tex:'\\psi_n=\\frac{1}{\\sqrt{2^n n!}}H_n(x)e^{-x^2/2}',blurb:'量子谐振子定态波函数。'},
  params:[i('n','n',2,0,10)],
  fn:p=>x=>{const n=p.n as number; const c=1/Math.sqrt(Math.pow(2,n)*fact(n)*Math.sqrt(Math.PI)); const psi=c*H(n,x)*Math.exp(-x*x/2); return psi*psi;},
  view:{cx:0,cy:0.3,scale:60},
});
