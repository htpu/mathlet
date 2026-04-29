import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'mean-value',title:'中值定理',domain:'calculus',level:2,tex:'f\'(c)=\\frac{f(b)-f(a)}{b-a}',blurb:'区间内必存在 c 使切线平行于割线。',surface:'canvas2d'},
  params:[n('a','a',-1.5,-3,3,0.01),n('b','b',1.5,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>x*x*x/3-x;
    const fp=(x:number)=>x*x-1;
    plotFn(s,v,f,'#39bae6');
    const a=p.a as number, b=p.b as number;
    const slope=(f(b)-f(a))/(b-a);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(a,f(a)); s.ctx.lineTo(b,f(b)); s.ctx.stroke();
    // find c: fp(c) = slope, c² = slope+1
    if(slope+1>=0){const c1=Math.sqrt(slope+1), c2=-c1;
      for(const c of [c1,c2]){if(c>=Math.min(a,b)&&c<=Math.max(a,b)){
        s.ctx.strokeStyle='#f07178'; s.ctx.beginPath(); s.ctx.moveTo(c-2, f(c)+slope*(-2)); s.ctx.lineTo(c+2, f(c)+slope*2); s.ctx.stroke();
        fillCircle(s,v,c,f(c),5,'#f07178');
      }}}
    fillCircle(s,v,a,f(a),4,'#ffb454'); fillCircle(s,v,b,f(b),4,'#ffb454');
  },
} satisfies Formula;
