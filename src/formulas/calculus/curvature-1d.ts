import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'curvature-1d',title:'曲率半径',domain:'calculus',level:3,tex:'\\kappa=\\frac{|f\'\'|}{(1+f\'^2)^{3/2}}',blurb:'抛物线在每点画密接圆。',surface:'canvas2d'},
  params:[n('a','二次系数 a',0.5,-2,2,0.01), n('x0','x₀',1,-3,3,0.05)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/10};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number, x0=p.x0 as number;
    const f=(x:number)=>a*x*x;
    const fp=(x:number)=>2*a*x;
    const fpp=()=>2*a;
    plotFn(s,v,f,'#39bae6');
    const k=Math.abs(fpp())/Math.pow(1+fp(x0)**2, 1.5);
    const r=1/k;
    const tx=1, ty=fp(x0); const len=Math.hypot(tx,ty);
    const nx=-ty/len, ny=tx/len;
    const cx=x0+nx*r, cy=f(x0)+ny*r;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=1.5/v.scale;
    s.ctx.beginPath(); s.ctx.arc(cx,cy,r,0,Math.PI*2); s.ctx.stroke();
    s.ctx.fillStyle='#f07178';
    s.ctx.beginPath(); s.ctx.arc(x0,f(x0),5/v.scale,0,Math.PI*2); s.ctx.fill();
  },
} satisfies Formula;
