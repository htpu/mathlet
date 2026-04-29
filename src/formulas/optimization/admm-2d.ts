import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'admm-2d',title:'ADMM (LASSO 2D)',domain:'optimization',level:5,tex:'\\min\\frac{1}{2}\\|Ax-b\\|^2+\\lambda\\|x\\|_1',blurb:'Soft-threshold 子步骤可视化。'},
  params:[n('lambda','λ',0.5,0,3,0.01),i('iter','迭代',20,1,100)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    let x=[1.5,1.5], z=[0,0], u=[0,0]; const A=[[1,0.3],[0.3,1]]; const b=[1,1];
    const lam=p.lambda as number, rho=1;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x[0],x[1]);
    for(let it=0;it<(p.iter as number);it++){
      // x-update: (A^T A + ρI)^-1 (A^T b + ρ(z-u))
      const AtA=[[A[0][0]*A[0][0]+A[1][0]*A[1][0]+rho, A[0][0]*A[0][1]+A[1][0]*A[1][1]],[A[0][0]*A[0][1]+A[1][0]*A[1][1], A[0][1]*A[0][1]+A[1][1]*A[1][1]+rho]];
      const Atb=[A[0][0]*b[0]+A[1][0]*b[1]+rho*(z[0]-u[0]), A[0][1]*b[0]+A[1][1]*b[1]+rho*(z[1]-u[1])];
      const det=AtA[0][0]*AtA[1][1]-AtA[0][1]*AtA[1][0];
      x=[(AtA[1][1]*Atb[0]-AtA[0][1]*Atb[1])/det, (AtA[0][0]*Atb[1]-AtA[1][0]*Atb[0])/det];
      // z = soft-threshold(x+u, λ/ρ)
      z=[x[0]+u[0],x[1]+u[1]].map(t=>Math.sign(t)*Math.max(0,Math.abs(t)-lam/rho));
      u=[u[0]+x[0]-z[0], u[1]+x[1]-z[1]];
      s.ctx.lineTo(x[0],x[1]);
    }
    s.ctx.stroke();
    fillCircle(s,v,x[0],x[1],5,'#f07178');
  },
} satisfies Formula;
