import type { Formula } from '../types';
import { i, n } from '../types';
import { clear, drawAxes, setupView, strokeCircle, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'de-moivre',title:'棣莫弗公式',domain:'algebra',level:3,tex:'(\\cos\\theta+i\\sin\\theta)^n=\\cos n\\theta+i\\sin n\\theta',blurb:'幂运算 = 角度乘 n。'},
  params:[i('n','幂 n',5,1,15),n('theta','θ',0.6,0,Math.PI*2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.6};
    clear(s); setupView(s,v); drawAxes(s,v);
    strokeCircle(s,v,0,0,1,'#39bae6');
    const th=p.theta as number, n=p.n as number;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(Math.cos(th),Math.sin(th)); s.ctx.stroke();
    s.ctx.strokeStyle='#f07178'; s.ctx.beginPath(); s.ctx.moveTo(0,0); s.ctx.lineTo(Math.cos(n*th),Math.sin(n*th)); s.ctx.stroke();
    s.ctx.strokeStyle='#2d3340'; s.ctx.lineWidth=1/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,0.3,0,th); s.ctx.stroke();
    s.ctx.beginPath(); s.ctx.arc(0,0,0.5,0,n*th); s.ctx.stroke();
    fillCircle(s,v,Math.cos(th),Math.sin(th),5,'#ffb454');
    fillCircle(s,v,Math.cos(n*th),Math.sin(n*th),5,'#f07178');
  },
} satisfies Formula;
