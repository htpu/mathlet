import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function P(n:number,x:number):number{if(n===0) return 1; if(n===1) return x; let pm=1, p=x; for(let k=2;k<=n;k++){const pn=((2*k-1)*x*p-(k-1)*pm)/k; pm=p; p=pn;} return p;}
export default fn1d({
  meta:{slug:'legendre-poly',title:'Legendre 多项式',domain:'algebra',level:4,tex:'P_n(x)',blurb:'[-1,1] 上正交。'},
  params:[i('n','阶',5,0,12)],
  fn:p=>x=>P(p.n as number, x),
  view:{cx:0,cy:0,scale:80},
});
