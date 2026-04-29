import { n, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const fns:Record<string,{f:(x:number)=>number, fp:(x:number)=>number}>={
  sin_x2:{f:x=>Math.sin(x*x), fp:x=>2*x*Math.cos(x*x)},
  exp_neg:{f:x=>Math.exp(-x*x), fp:x=>-2*x*Math.exp(-x*x)},
  log_sin:{f:x=>Math.log(Math.abs(Math.sin(x))+1e-9), fp:x=>1/Math.tan(x)},
};
export default fn1d({
  meta:{slug:'chain-rule',title:'链式法则',domain:'calculus',level:2,tex:'\\frac{d}{dx}f(g(x))=f\'(g(x))g\'(x)',blurb:'函数 + 导数对照。'},
  params:[sel('f','函数','sin_x2',[{value:'sin_x2',label:'sin(x²)'},{value:'exp_neg',label:'e^{-x²}'},{value:'log_sin',label:'ln|sin x|'}])],
  fns:[
    {color:'#39bae6', fn:p=>fns[p.f as string].f},
    {color:'#ffb454', fn:p=>fns[p.f as string].fp},
  ],
  fn:()=>x=>0,
  view:{cx:0,cy:0,scale:50},
});
