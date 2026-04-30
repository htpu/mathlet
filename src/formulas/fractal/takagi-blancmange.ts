import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'takagi-blancmange',title:'Takagi 函数 (布满杰)',domain:'fractal',level:4,tex:'T(x)=\\sum_{n=0}^\\infty 2^{-n}s(2^n x),\\ s(x)=\\min_k|x-k|',blurb:'连续但处处不可微。'},
  params:[i('N','项数',20,1,30)],
  fn:p=>x=>{let s=0; for(let n=0;n<(p.N as number);n++){const t=Math.pow(2,n)*x; const d=Math.abs(t-Math.round(t)); s+=Math.pow(2,-n)*d;} return s;},
  view:{cx:0.5,cy:0.4,scale:400},
});
