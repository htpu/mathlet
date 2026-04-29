import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'conjugate-gradient',title:'共轭梯度（CG）',domain:'optimization',level:4,tex:'p_{k+1}=-r_{k+1}+\\beta_k p_k',blurb:'求解 Ax=b，2D 椭圆 ≤2 步收敛。'},
  params:[i('steps','步数',2,1,10)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    const A=[[3,1],[1,2]], b=[2,3];
    let x=[1.5,-1.5];
    let r=[b[0]-A[0][0]*x[0]-A[0][1]*x[1], b[1]-A[1][0]*x[0]-A[1][1]*x[1]];
    let pp=[r[0],r[1]];
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x[0],x[1]);
    fillCircle(s,v,x[0],x[1],4,'#39bae6');
    for(let k=0;k<(p.steps as number);k++){
      const Ap=[A[0][0]*pp[0]+A[0][1]*pp[1], A[1][0]*pp[0]+A[1][1]*pp[1]];
      const alpha=(r[0]*r[0]+r[1]*r[1])/(pp[0]*Ap[0]+pp[1]*Ap[1]);
      x=[x[0]+alpha*pp[0], x[1]+alpha*pp[1]];
      const rn=[r[0]-alpha*Ap[0], r[1]-alpha*Ap[1]];
      const beta=(rn[0]*rn[0]+rn[1]*rn[1])/(r[0]*r[0]+r[1]*r[1]);
      pp=[rn[0]+beta*pp[0], rn[1]+beta*pp[1]];
      r=rn;
      s.ctx.lineTo(x[0],x[1]);
      fillCircle(s,v,x[0],x[1],4,'#f07178');
    }
    s.ctx.stroke();
  },
} satisfies Formula;
