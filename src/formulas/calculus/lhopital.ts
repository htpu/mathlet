import { n, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const cases:Record<string,{num:(x:number)=>number, den:(x:number)=>number, lim:string}>={
  sin_x:{num:Math.sin, den:x=>x, lim:'sin(x)/x → 1'},
  exp:{num:x=>Math.exp(x)-1, den:x=>x, lim:'(eˣ-1)/x → 1'},
  log:{num:x=>Math.log(1+x), den:x=>x, lim:'ln(1+x)/x → 1'},
};
export default fn1d({
  meta:{slug:'lhopital',title:'洛必达型 0/0',domain:'calculus',level:2,tex:'\\lim\\frac{f(x)}{g(x)}=\\lim\\frac{f\'(x)}{g\'(x)}',blurb:'x→0 时常见的 0/0 型极限。'},
  params:[sel('case','形式','sin_x',[{value:'sin_x',label:'sin x / x'},{value:'exp',label:'(eˣ-1)/x'},{value:'log',label:'ln(1+x)/x'}])],
  fn:p=>x=>{const c=cases[p.case as string]; return Math.abs(x)<1e-9?1:c.num(x)/c.den(x);},
  view:{cx:0,cy:1,scale:120},
});
