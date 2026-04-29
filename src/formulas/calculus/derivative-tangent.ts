import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'derivative-tangent',title:'导数=切线斜率',domain:'calculus',level:1,tex:'f\'(x_0)=\\lim_{h\\to 0}\\frac{f(x_0+h)-f(x_0)}{h}',blurb:'割线 → 切线。h→0。',surface:'canvas2d'},
  params:[n('x0','x₀',1,-3,3,0.01),n('h','h',1,0.001,2,0.001,true)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x*x/3-x;
    plotFn(s,v,f,'#39bae6');
    const x0=p.x0 as number, h=p.h as number;
    const slope=(f(x0+h)-f(x0))/h;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(x0-3,f(x0)+slope*(-3)); s.ctx.lineTo(x0+3,f(x0)+slope*3); s.ctx.stroke();
    fillCircle(s,v,x0,f(x0),5,'#ffb454');
    fillCircle(s,v,x0+h,f(x0+h),5,'#f07178');
  },
} satisfies Formula;
