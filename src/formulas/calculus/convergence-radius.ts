import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'convergence-radius',title:'收敛半径',domain:'calculus',level:3,tex:'\\sum x^n=\\frac{1}{1-x},|x|<1',blurb:'几何级数仅在 |x|<1 收敛，N→∞ 部分和爆炸于 R 之外。'},
  params:[i('N','项数',8,1,200)],
  fn:p=>x=>{let s=0,t=1; for(let k=0;k<=p.N as number;k++){s+=t; t*=x;} return s;},
  fns:[
    {color:'#2d3340', fn:()=>x=>x===1?Infinity:1/(1-x)},
    {color:'#ffb454', fn:p=>x=>{let s=0,t=1; for(let k=0;k<=p.N as number;k++){s+=t; t*=x;} return s;}},
  ],
  view:{cx:0,cy:0,scale:80},
});
