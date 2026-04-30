import { i, n as nn } from '../types';
import { fn1d } from '../../templates/fn1d';
function L(nl:number,a:number,x:number):number{if(nl===0) return 1; if(nl===1) return 1+a-x; let l0=1,l1=1+a-x; for(let k=1;k<nl;k++){const l2=((2*k+1+a-x)*l1-(k+a)*l0)/(k+1); l0=l1; l1=l2;} return l1;}
function fact(n:number):number{return n<=1?1:n*fact(n-1);}
export default fn1d({
  meta:{slug:'hydrogen-radial',title:'氢原子径向波函数',domain:'quantum',level:5,tex:'R_{nl}(r)\\propto r^l L_{n-l-1}^{2l+1}(2r/n)e^{-r/n}',blurb:'径向部分（玻尔半径单位）。'},
  params:[i('n','n',2,1,5),i('l','l',0,0,4)],
  fn:p=>r=>{const n=p.n as number, l=p.l as number; if(l>=n) return 0; if(r<0) return NaN; const rho=2*r/n; return Math.pow(rho,l)*L(n-l-1,2*l+1,rho)*Math.exp(-rho/2);},
  view:{cx:8,cy:0,scale:30},
});
