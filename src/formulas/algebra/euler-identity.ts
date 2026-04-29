import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle } from '../../render/canvas2d';
export default {
  meta: { slug:'euler-identity', title:'欧拉公式', domain:'algebra', level:1, tex:'e^{i\\theta}=\\cos\\theta+i\\sin\\theta', blurb:'单位圆上 e^{iθ} 的几何意义：旋转。', surface:'canvas2d', animated:true },
  params: [n('theta','θ',1.5,0,Math.PI*4,0.01), n('show','显示分量',1,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.6};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,1,'#39bae6',1.5);
    const th=p.theta as number;
    const x=Math.cos(th), y=Math.sin(th);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(x,y); s.ctx.stroke();
    if(p.show){
      s.ctx.strokeStyle='#c2d94c'; s.ctx.setLineDash([0.05,0.05]);
      s.ctx.beginPath(); s.ctx.moveTo(x,0); s.ctx.lineTo(x,y); s.ctx.moveTo(0,y); s.ctx.lineTo(x,y); s.ctx.stroke();
      s.ctx.setLineDash([]);
    }
    fillCircle(s,v,x,y,4,'#ffb454');
    fillCircle(s,v,x,0,3,'#c2d94c');
    fillCircle(s,v,0,y,3,'#c2d94c');
  },
} satisfies Formula;
