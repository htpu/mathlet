import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, fillCircle, text } from '../../render/canvas2d';
export default {
  meta:{slug:'related-rates',title:'相关变化率（梯子滑落）',domain:'calculus',level:3,tex:'\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}',blurb:'梯子靠墙底端外移，顶端下落速率。',surface:'canvas2d',animated:true},
  params:[n('L','梯长 L',5,2,8,0.05),n('vx','底端速度',0.5,0.1,2,0.01),n('reset','reset',0,0,1,1)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const v={cx:3,cy:3,scale:Math.min(s.width,s.height)/10};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const L=p.L as number;
    const x=Math.min(L*0.99, (p.vx as number)*((t)%(L/(p.vx as number))));
    const y=Math.sqrt(L*L-x*x);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2.5/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,y); s.ctx.lineTo(x,0); s.ctx.stroke();
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(0,y+1); s.ctx.moveTo(0,0); s.ctx.lineTo(x+1,0); s.ctx.stroke();
    fillCircle(s,v,0,y,5,'#39bae6'); fillCircle(s,v,x,0,5,'#c2d94c');
    const dydt=-x/y*(p.vx as number);
    text(s,12,12,`x=${x.toFixed(2)}, y=${y.toFixed(2)}, dy/dt=${dydt.toFixed(3)}`,'#cbccc6',12);
  },
} satisfies Formula;
