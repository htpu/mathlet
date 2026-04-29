import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'sgd-noise',title:'SGD 噪声轨迹',domain:'optimization',level:3,tex:'x_{k+1}=x_k-\\eta(\\nabla f+\\xi)',blurb:'随机梯度引入噪声 → 锯齿状下降。'},
  params:[n('lr','lr',0.05,0.001,0.5,0.001),n('noise','噪声',0.5,0,3,0.01),i('steps','步',200,10,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=mulberry32(7);
    let x=-2, y=2;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1/v.scale; s.ctx.beginPath(); s.ctx.moveTo(x,y);
    for(let i=0;i<(p.steps as number);i++){
      const gx=2*x+gaussian(r)*(p.noise as number);
      const gy=6*y+gaussian(r)*(p.noise as number);
      x-=(p.lr as number)*gx; y-=(p.lr as number)*gy;
      s.ctx.lineTo(x,y);
    }
    s.ctx.stroke();
    fillCircle(s,v,x,y,5,'#f07178');
  },
} satisfies Formula;
