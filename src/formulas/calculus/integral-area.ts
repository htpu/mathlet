import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, text } from '../../render/canvas2d';
export default {
  meta:{slug:'integral-area',title:'定积分=面积',domain:'calculus',level:1,tex:'\\int_a^b f(x)dx',blurb:'拖动 a/b，面积可正可负。',surface:'canvas2d'},
  params:[n('a','a',-1,-3,3,0.01),n('b','b',2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>Math.sin(x)+x*0.3;
    plotFn(s,v,f,'#39bae6');
    const a=Math.min(p.a as number, p.b as number), b=Math.max(p.a as number, p.b as number);
    s.ctx.fillStyle='rgba(255,180,84,0.3)';
    s.ctx.beginPath(); s.ctx.moveTo(a,0);
    for(let x=a;x<=b;x+=0.02) s.ctx.lineTo(x,f(x));
    s.ctx.lineTo(b,0); s.ctx.closePath(); s.ctx.fill();
    let I=0; const N=500; const dx=(b-a)/N;
    for(let i=0;i<N;i++) I+=f(a+(i+0.5)*dx)*dx;
    text(s,12,12,`∫ ≈ ${I.toFixed(4)}`,'#ffb454',13);
  },
} satisfies Formula;
