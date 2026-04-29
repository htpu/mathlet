import { n, i } from '../types';
import { ode2d } from '../../templates/ode2d';
export default ode2d({
  meta:{slug:'lorenz-96',title:'Lorenz 96 模型（4 维投影）',domain:'ode',level:5,tex:'\\dot x_i=(x_{i+1}-x_{i-2})x_{i-1}-x_i+F',blurb:'气候建模简化模型。投影 (x₀, x₁) 平面。'},
  params:[n('F','强制 F',8,1,15,0.05)],
  derivs:p=>(t,y)=>{
    const N=y.length;
    const dy=new Array(N);
    const F=p.F as number;
    for(let i=0;i<N;i++){const ip=(i+1)%N, im=(i-1+N)%N, im2=(i-2+N)%N; dy[i]=(y[ip]-y[im2])*y[im]-y[i]+F;}
    return dy;
  },
  init:()=>{const arr:[number,number][]=[]; arr.push([8.01,8]); return arr;},
  view:{cx:0,cy:0,scale:25}, step:0.01,
});
