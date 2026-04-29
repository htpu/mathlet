import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotParam, text } from '../../render/canvas2d';
export default {
  meta:{slug:'greens-theorem',title:"格林定理（面积公式）",domain:'calculus',level:4,tex:'A=\\frac{1}{2}\\oint(x\\,dy-y\\,dx)',blurb:'用边界曲线计算包围面积。'},
  params:[n('a','椭圆 a',2,0.3,3,0.01),n('b','椭圆 b',1.3,0.3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, b=p.b as number;
    plotParam(s,v,t=>[a*Math.cos(t),b*Math.sin(t)],0,Math.PI*2,'#ffb454');
    s.ctx.fillStyle='rgba(255,180,84,0.2)';
    s.ctx.beginPath();
    for(let t=0;t<Math.PI*2;t+=0.02) s.ctx.lineTo(a*Math.cos(t),b*Math.sin(t));
    s.ctx.closePath(); s.ctx.fill();
    let A=0; const N=2000;
    for(let i=0;i<N;i++){const t=2*Math.PI*i/N; const x=a*Math.cos(t), y=b*Math.sin(t); const dx=-a*Math.sin(t)*(2*Math.PI/N), dy=b*Math.cos(t)*(2*Math.PI/N); A+=0.5*(x*dy-y*dx);}
    text(s,12,12,`A ≈ ${A.toFixed(4)} (πab = ${(Math.PI*a*b).toFixed(4)})`,'#ffb454',12);
  },
} satisfies Formula;
