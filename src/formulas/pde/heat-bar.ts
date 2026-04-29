import { n, i } from '../types';
import { fn1d } from '../../templates/fn1d';
export default fn1d({
  meta:{slug:'heat-bar',title:'热棒解析解（傅里叶展开）',domain:'pde',level:3,tex:'u(x,t)=\\sum b_n\\sin(n\\pi x)e^{-n^2\\pi^2 t}',blurb:'方波初值在 t 时刻的解析解。'},
  params:[n('t','时间 t',0.05,0.001,0.5,0.001,true),i('N','谐波数',20,1,100)],
  fn:p=>x=>{if(x<0||x>1) return 0; let s=0; for(let n=1;n<=(p.N as number);n+=2) s+=4/(n*Math.PI)*Math.sin(n*Math.PI*x)*Math.exp(-n*n*Math.PI*Math.PI*(p.t as number)); return s;},
  view:{cx:0.5,cy:0.5,scale:200},
});
