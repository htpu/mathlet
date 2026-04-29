import { s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
const fns:Record<string,(x:number)=>number>={asin:Math.asin,acos:Math.acos,atan:Math.atan};
export default fn1d({
  meta:{slug:'inverse-trig',title:'反三角函数',domain:'algebra',level:1,tex:'\\arcsin,\\arccos,\\arctan',blurb:'三角函数的反函数。'},
  params:[sel('f','函数','atan',[{value:'asin',label:'arcsin'},{value:'acos',label:'arccos'},{value:'atan',label:'arctan'}])],
  fn:p=>x=>fns[p.f as string](x),
  view:{cx:0,cy:0,scale:60},
});
