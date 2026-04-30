import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView, fillCircle, strokeCircle, text } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'montecarlo-pi',title:'Monte Carlo 估算 π',domain:'probability',level:2,tex:'\\pi\\approx 4\\cdot k/N',blurb:'随机点落在单位圆内的比例 × 4。'},
  params:[i('N','点数',1000,10,20000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/2.4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    strokeCircle(s,v,0,0,1,'#39bae6');
    const r=mulberry32((Date.now()^Math.floor(Math.random()*0xffffffff))>>>0);
    let inside=0;
    for(let i=0;i<(p.N as number);i++){const x=r()*2-1, y=r()*2-1; const k=x*x+y*y<=1; if(k) inside++;
      fillCircle(s,v,x,y,1.5, k?'rgba(57,186,230,0.6)':'rgba(240,113,120,0.6)');}
    const piEst=4*inside/(p.N as number);
    text(s,12,12,`π ≈ ${piEst.toFixed(4)} (in/N=${inside}/${p.N})`,'#ffb454',14);
  },
} satisfies Formula;
