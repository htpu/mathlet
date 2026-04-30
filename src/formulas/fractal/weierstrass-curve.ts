import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'weierstrass-curve',title:'Weierstrass 函数',domain:'fractal',level:4,tex:'W(x)=\\sum_{n=0}^\\infty a^n\\cos(b^n\\pi x)',blurb:'连续处处不可微的经典反例。'},
  params:[n('a','a',0.5,0.1,0.99,0.01),n('b','b',5,2,15,0.01),i('N','项数',20,1,40)],
  fn:p=>x=>{let s=0; for(let n=0;n<(p.N as number);n++){s+=Math.pow(p.a as number,n)*Math.cos(Math.pow(p.b as number,n)*Math.PI*x);} return s;},
  view:{cx:0,cy:0,scale:200},
});
