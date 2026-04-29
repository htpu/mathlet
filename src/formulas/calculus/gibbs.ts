import { i } from '../types';
import { fn1d } from '../../templates/fn1d';
function square(N:number,x:number){let s=0; for(let k=1;k<=N;k+=2) s+=Math.sin(k*x)/k; return s*4/Math.PI;}
export default fn1d({
  meta:{slug:'gibbs',title:'Gibbs 现象',domain:'calculus',level:4,tex:'\\lim_{N\\to\\infty}\\text{overshoot}\\approx 8.95\\%',blurb:'阶跃处过冲约 9%，永不消失。',},
  params:[i('N','谐波数',20,1,400)],
  fn:p=>x=>square(p.N as number, x),
  view:{cx:0.3,cy:0,scale:200},
});
