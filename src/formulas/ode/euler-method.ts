import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'euler-method',title:'欧拉法 vs 真解',domain:'ode',level:2,tex:'y_{n+1}=y_n+hf(t_n,y_n)',blurb:'步长 h 越大误差越大。'},
  params:[n('h','步长 h',0.3,0.01,1,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:2,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    plotFn(s,v,t=>Math.exp(-t),'#39bae6');
    const h=p.h as number;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    let t=0, y=1; s.ctx.moveTo(t,y);
    while(t<5){y=y+h*(-y); t+=h; s.ctx.lineTo(t,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
