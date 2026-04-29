import { n, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const fns:Record<string,(p:any,x:number)=>number>={
  exp:(p,s)=>1/(s-(p.a as number)),
  sin:(p,s)=>{const w=p.a as number; return w/(s*s+w*w);},
  cos:(p,s)=>{const w=p.a as number; return s/(s*s+w*w);},
  step:(_,s)=>1/s,
};
export default fn1d({
  meta:{slug:'laplace-transform',title:'拉普拉斯变换',domain:'calculus',level:4,tex:'F(s)=\\int_0^\\infty f(t)e^{-st}dt',blurb:'常见 f(t) 的 F(s)（s > 极点）。'},
  params:[sel('f','f(t)','exp',[{value:'exp',label:'e^{at}'},{value:'sin',label:'sin(at)'},{value:'cos',label:'cos(at)'},{value:'step',label:'u(t)'}]),n('a','a',1,0.1,3,0.01)],
  fn:p=>x=>fns[p.f as string](p,x),
  view:{cx:2.5,cy:0,scale:60},
});
