import { s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'floor-ceil',title:'Floor / Ceil / Round',domain:'algebra',level:1,tex:'\\lfloor x\\rfloor,\\lceil x\\rceil',blurb:'阶梯函数。'},
  params:[sel('f','函数','floor',[{value:'floor',label:'floor'},{value:'ceil',label:'ceil'},{value:'round',label:'round'},{value:'trunc',label:'trunc'}])],
  fn:p=>x=>{const f={floor:Math.floor,ceil:Math.ceil,round:Math.round,trunc:Math.trunc} as any; return f[p.f as string](x);},
  view:{cx:0,cy:0,scale:40},
});
