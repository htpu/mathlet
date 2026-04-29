import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'series-2-tan',title:'arctan 级数',domain:'calculus',level:3,tex:'\\arctan x=\\sum\\frac{(-1)^k x^{2k+1}}{2k+1}',blurb:'仅 |x|<=1 收敛。Leibniz π/4=1-1/3+1/5...'},
  params:[i('N','项数',10,1,200)],
  fns:[
    {color:'#39bae6', fn:()=>Math.atan},
    {color:'#ffb454', fn:p=>x=>{let s=0; for(let k=0;k<=(p.N as number);k++) s+=Math.pow(-1,k)*Math.pow(x,2*k+1)/(2*k+1); return s;}},
  ],
  fn:()=>Math.atan,
  view:{cx:0,cy:0,scale:60},
});
