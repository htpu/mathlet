import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'proximal-gradient',title:'近端梯度（ISTA）',domain:'optimization',level:5,tex:'x_{k+1}=\\text{prox}_{\\eta g}(x_k-\\eta\\nabla f)',blurb:'光滑+非光滑分裂。'},
  params:[n('lambda','λ',0.3,0,2,0.01),i('iter','步数',30,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/4};
    clear(s); setupView(s,v); drawAxes(s,v);
    let x=[1.5,1.5];
    const lam=p.lambda as number, eta=0.1;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x[0],x[1]);
    for(let it=0;it<(p.iter as number);it++){
      const gx=2*x[0], gy=2*x[1];
      const xn=[x[0]-eta*gx, x[1]-eta*gy];
      x=[Math.sign(xn[0])*Math.max(0,Math.abs(xn[0])-eta*lam), Math.sign(xn[1])*Math.max(0,Math.abs(xn[1])-eta*lam)];
      s.ctx.lineTo(x[0],x[1]);
    }
    s.ctx.stroke();
    fillCircle(s,v,x[0],x[1],5,'#f07178');
  },
} satisfies Formula;
