import type { Formula } from '../types';
import { i, s as sel } from '../types';
import { clear, drawAxes, setupView, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'riemann-sum',title:'黎曼和',domain:'calculus',level:2,tex:'\\int_a^b f\\approx\\sum f(x_i)\\Delta x',blurb:'矩形/中点/梯形逼近积分。',surface:'canvas2d'},
  params:[i('n','分段数',10,1,200), sel('rule','规则','left',[{value:'left',label:'左端点'},{value:'right',label:'右端点'},{value:'mid',label:'中点'},{value:'trap',label:'梯形'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:Math.PI,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const f=(x:number)=>Math.sin(x)+1.5;
    const a=0,b=Math.PI*2;
    const n=p.n as number;
    const dx=(b-a)/n;
    s.ctx.fillStyle='rgba(255,180,84,0.3)';
    s.ctx.strokeStyle='#ffb454';
    s.ctx.lineWidth=1.2/v.scale;
    for(let i=0;i<n;i++){
      const x0=a+i*dx;
      let h:number;
      if(p.rule==='left') h=f(x0);
      else if(p.rule==='right') h=f(x0+dx);
      else if(p.rule==='mid') h=f(x0+dx/2);
      else h=(f(x0)+f(x0+dx))/2;
      if(p.rule==='trap'){
        s.ctx.beginPath();
        s.ctx.moveTo(x0,0); s.ctx.lineTo(x0,f(x0)); s.ctx.lineTo(x0+dx,f(x0+dx)); s.ctx.lineTo(x0+dx,0); s.ctx.closePath();
      } else {
        s.ctx.beginPath();
        s.ctx.rect(x0,0,dx,h);
      }
      s.ctx.fill(); s.ctx.stroke();
    }
    plotFn(s,v,f,'#39bae6');
  },
} satisfies Formula;
