import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam } from '../../render/canvas2d';
export default {
  meta:{slug:'implicit-diff',title:'隐函数微分（圆）',domain:'calculus',level:2,tex:'\\frac{dy}{dx}=-\\frac{x}{y}',blurb:'圆 x²+y²=r² 的切线斜率。',surface:'canvas2d'},
  params:[n('r','r',2,0.5,3,0.01),n('theta','切点 θ',0.5,0,Math.PI*2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const r=p.r as number, th=p.theta as number;
    plotParam(s,v,t=>[r*Math.cos(t),r*Math.sin(t)],0,Math.PI*2,'#39bae6');
    const x=r*Math.cos(th), y=r*Math.sin(th);
    const slope=-x/y;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(x-3,y-3*slope); s.ctx.lineTo(x+3,y+3*slope); s.ctx.stroke();
    s.ctx.fillStyle='#f07178'; s.ctx.beginPath(); s.ctx.arc(x,y,5/v.scale,0,Math.PI*2); s.ctx.fill();
  },
} satisfies Formula;
