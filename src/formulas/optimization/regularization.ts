import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'regularization',title:'L2 正则化（岭回归）',domain:'optimization',level:4,tex:'\\min\\|y-X\\beta\\|^2+\\lambda\\|\\beta\\|^2',blurb:'多项式拟合 + L2 正则。'},
  params:[i('deg','多项式阶',8,1,20),n('lambda','λ',0.001,0,1,0.001,true)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    const xs:number[]=[], ys:number[]=[];
    for(let i=0;i<20;i++){const x=(r()-0.5)*3; const y=Math.sin(x)+gaussian(r)*0.3; xs.push(x); ys.push(y); fillCircle(s,v,x,y,3,'rgba(57,186,230,0.6)');}
    const D=p.deg as number, lam=p.lambda as number;
    // Build X
    const N=xs.length;
    const X:number[][]=[];
    for(let i=0;i<N;i++){const row:number[]=[]; for(let j=0;j<=D;j++) row.push(Math.pow(xs[i],j)); X.push(row);}
    // (X^T X + λI) β = X^T y
    const M=Array.from({length:D+1},()=>new Array(D+1).fill(0));
    const b=new Array(D+1).fill(0);
    for(let i=0;i<N;i++) for(let j=0;j<=D;j++){b[j]+=X[i][j]*ys[i]; for(let k=0;k<=D;k++) M[j][k]+=X[i][j]*X[i][k];}
    for(let j=0;j<=D;j++) M[j][j]+=lam;
    // Gaussian elimination
    const A=M.map((r,i)=>[...r,b[i]]);
    const n=D+1;
    for(let i=0;i<n;i++){let max=i; for(let k=i+1;k<n;k++) if(Math.abs(A[k][i])>Math.abs(A[max][i])) max=k; [A[i],A[max]]=[A[max],A[i]];
      for(let k=i+1;k<n;k++){const f=A[k][i]/(A[i][i]+1e-12); for(let j=i;j<=n;j++) A[k][j]-=f*A[i][j];}}
    const beta=new Array(n).fill(0);
    for(let i=n-1;i>=0;i--){let s=A[i][n]; for(let j=i+1;j<n;j++) s-=A[i][j]*beta[j]; beta[i]=s/(A[i][i]+1e-12);}
    plotFn(s,v,x=>{let y=0; for(let j=0;j<=D;j++) y+=beta[j]*Math.pow(x,j); return y;},'#ffb454');
    plotFn(s,v,Math.sin,'#2d3340');
  },
} satisfies Formula;
