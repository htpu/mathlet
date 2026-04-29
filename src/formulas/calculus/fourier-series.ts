import { i, s as sel } from '../types';
import { fn1d } from '../../templates/fn1d';
function square(N:number,x:number){let s=0; for(let k=1;k<=N;k+=2) s+=Math.sin(k*x)/k; return s*4/Math.PI;}
function saw(N:number,x:number){let s=0; for(let k=1;k<=N;k++) s+=Math.pow(-1,k+1)*Math.sin(k*x)/k; return s*2/Math.PI;}
function tri(N:number,x:number){let s=0; for(let k=0;k<N;k++){const m=2*k+1; s+=Math.pow(-1,k)*Math.sin(m*x)/(m*m);} return s*8/(Math.PI*Math.PI);}
const fns:Record<string,(N:number,x:number)=>number>={square,saw,tri};
const targets:Record<string,(x:number)=>number>={
  square:x=>{const r=((x%(2*Math.PI))+2*Math.PI)%(2*Math.PI); return r<Math.PI?1:-1;},
  saw:x=>{const r=((x+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI; return r/Math.PI;},
  tri:x=>{const r=((x%(2*Math.PI))+2*Math.PI)%(2*Math.PI)-Math.PI; return Math.abs(r)/Math.PI*2-1;},
};
export default fn1d({
  meta:{slug:'fourier-series',title:'傅里叶级数',domain:'calculus',level:3,tex:'f(x)=\\sum a_k\\cos kx + b_k\\sin kx',blurb:'方/锯/三角波由谐波叠加。Gibbs 现象在阶跃处显现。'},
  params:[sel('fn','波形','square',[{value:'square',label:'方波'},{value:'saw',label:'锯齿波'},{value:'tri',label:'三角波'}]), i('N','谐波数 N',8,1,80)],
  fn:()=>()=>0,
  fns:[
    {color:'#2d3340', fn:p=>x=>targets[p.fn as string](x)},
    {color:'#ffb454', fn:p=>x=>fns[p.fn as string](p.N as number, x)},
  ],
  view:{cx:0,cy:0,scale:50},
});
