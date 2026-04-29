import type { Formula } from '../types';
import { n } from '../types';
import { clear, fillCircle, setupView, drawAxes } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
let events:number[]=[]; let last='';
export default {
  meta:{slug:'poisson-process',title:'泊松过程',domain:'probability',level:3,tex:'P(N(t)=k)=\\frac{(\\lambda t)^k}{k!}e^{-\\lambda t}',blurb:'独立等待时间为指数分布的事件流。',surface:'canvas2d'},
  params:[n('lambda','λ',2,0.1,10,0.05),n('T','T',10,1,30,0.5)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.lambda}|${p.T}`;
    if(last!==sig){events=[]; const r=mulberry32(42); let t=0; const lam=p.lambda as number, T=p.T as number;
      while(t<T){t+=-Math.log(1-r())/lam; if(t<T) events.push(t);} last=sig;}
    const v={cx:(p.T as number)/2, cy:0, scale:Math.min(s.width,s.height)/((p.T as number)*1.4)};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    let count=0; let last_t=0;
    s.ctx.moveTo(0,0);
    for(const e of events){s.ctx.lineTo(e,count); count++; s.ctx.lineTo(e,count); last_t=e;}
    s.ctx.lineTo(p.T as number, count);
    s.ctx.stroke();
    for(const e of events) fillCircle(s,v,e,0,3,'#ffb454');
  },
} satisfies Formula;
