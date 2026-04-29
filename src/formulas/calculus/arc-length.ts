import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, text } from '../../render/canvas2d';
export default {
  meta:{slug:'arc-length',title:'弧长',domain:'calculus',level:3,tex:'L=\\int_a^b\\sqrt{1+f\'(x)^2}dx',blurb:'数值估算 sin 在 [a,b] 上的弧长。',surface:'canvas2d'},
  params:[n('a','a',-1,-5,5,0.05), n('b','b',3,-5,5,0.05), n('A','幅度',1,0.1,3,0.01), n('w','频率',1,0.1,4,0.01)],
  render(s,pa){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/12};
    clear(s); setupView(s,v); drawAxes(s,v);
    const A=pa.A as number, w=pa.w as number;
    const f=(x:number)=>A*Math.sin(w*x);
    const fp=(x:number)=>A*w*Math.cos(w*x);
    plotFn(s,v,f,'#39bae6');
    let a=Math.min(pa.a as number, pa.b as number), b=Math.max(pa.a as number, pa.b as number);
    const N=2000;
    let L=0;
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2.5/v.scale;
    s.ctx.beginPath();
    s.ctx.moveTo(a,f(a));
    for(let i=1;i<=N;i++){const x=a+(b-a)*i/N; const y=f(x); s.ctx.lineTo(x,y); L+=Math.hypot((b-a)/N,1)*Math.sqrt(1+fp(x-((b-a)/(2*N)))**2)/Math.hypot((b-a)/N,1);}
    L=0; const dx=(b-a)/N; for(let i=0;i<N;i++){const x=a+(i+0.5)*dx; L+=Math.sqrt(1+fp(x)**2)*dx;}
    s.ctx.stroke();
    text(s,12,12,`L ≈ ${L.toFixed(4)}`,'#ffb454',13);
  },
} satisfies Formula;
