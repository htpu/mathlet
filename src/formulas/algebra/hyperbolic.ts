import { s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const fns:Record<string,(x:number)=>number>={sinh:Math.sinh,cosh:Math.cosh,tanh:Math.tanh,coth:x=>1/Math.tanh(x),sech:x=>1/Math.cosh(x),csch:x=>1/Math.sinh(x)};
export default fn1d({
  meta:{slug:'hyperbolic',title:'双曲函数',domain:'algebra',level:2,tex:'\\sinh,\\cosh,\\tanh',blurb:'sinh/cosh/tanh 及其倒数。'},
  params:[sel('f','函数','tanh',[{value:'sinh',label:'sinh'},{value:'cosh',label:'cosh'},{value:'tanh',label:'tanh'},{value:'coth',label:'coth'},{value:'sech',label:'sech'},{value:'csch',label:'csch'}])],
  fn:p=>x=>fns[p.f as string](x),
  view:{cx:0,cy:0,scale:60},
});
