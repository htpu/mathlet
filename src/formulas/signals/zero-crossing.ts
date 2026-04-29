import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'zero-crossing',title:'过零率',domain:'signals',level:2,tex:'\\text{ZCR}=\\frac{1}{N}\\sum |\\text{sgn}(x_n)-\\text{sgn}(x_{n-1})|/2',blurb:'高频信号过零率高。'},
  params:[n('f','频率',5,0.5,15,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/2.5};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const f=p.f as number;
    plotFn(s,v,t=>Math.sin(2*Math.PI*f*t),'#39bae6');
    let zc=0;
    let last=Math.sin(2*Math.PI*f*0);
    const N=200;
    for(let i=1;i<=N;i++){const t=i/N; const y=Math.sin(2*Math.PI*f*t); if(Math.sign(y)!==Math.sign(last)){zc++; fillCircle(s,v,t,0,4,'#f07178');} last=y;}
    s.ctx.fillStyle='#cbccc6'; s.ctx.font='13px ui-monospace,monospace';
    const dpr=s.dpr; s.ctx.setTransform(dpr,0,0,dpr,0,0);
    s.ctx.fillText(`ZCR = ${zc} crossings`, 12, 14);
  },
} satisfies Formula;
