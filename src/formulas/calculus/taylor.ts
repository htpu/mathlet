import { n, i, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
function fact(k:number){let r=1; for(let i=2;i<=k;i++) r*=i; return r;}
const series:Record<string,(N:number,x:number)=>number>={
  sin:(N,x)=>{let s=0; for(let k=0;k<=N;k++) s+=Math.pow(-1,k)*Math.pow(x,2*k+1)/fact(2*k+1); return s;},
  cos:(N,x)=>{let s=0; for(let k=0;k<=N;k++) s+=Math.pow(-1,k)*Math.pow(x,2*k)/fact(2*k); return s;},
  exp:(N,x)=>{let s=0; for(let k=0;k<=N;k++) s+=Math.pow(x,k)/fact(k); return s;},
  log:(N,x)=>{let s=0; for(let k=1;k<=N+1;k++) s+=Math.pow(-1,k+1)*Math.pow(x-1,k)/k; return s;},
};
const target:Record<string,(x:number)=>number>={sin:Math.sin,cos:Math.cos,exp:Math.exp,log:x=>x>0?Math.log(x):NaN};
export default fn1d({
  meta:{slug:'taylor',title:'泰勒级数逼近',domain:'calculus',level:2,tex:'f(x)=\\sum\\frac{f^{(k)}(0)}{k!}x^k',blurb:'调阶数看部分和如何逼近原函数。'},
  params:[sel('fn','函数','sin',[{value:'sin',label:'sin x'},{value:'cos',label:'cos x'},{value:'exp',label:'eˣ'},{value:'log',label:'ln x'}]), i('N','阶数 N',5,0,30)],
  fn:()=>()=>0,
  fns:[
    {color:'#39bae6', fn:p=>x=>target[p.fn as string](x)},
    {color:'#ffb454', fn:p=>x=>series[p.fn as string](p.N as number, x)},
  ],
  view:{cx:0,cy:0,scale:35},
});
