import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'sum-square-roots',title:'∑1/√n 与 2√n 比较',domain:'numbertheory',level:3,tex:'\\sum 1/\\sqrt n\\sim 2\\sqrt n+\\zeta(1/2)',blurb:'部分和与渐近线对照。'},
  params:[i('N','N',300,10,5000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number;
    const S:number[]=[0]; for(let n=1;n<=N;n++) S.push(S[n-1]+1/Math.sqrt(n));
    const max=S[N];
    const v={cx:N/2,cy:max/2,scale:Math.min(s.width/(N*1.05), s.height/(max*1.1))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let n=0;n<=N;n++){if(n===0) s.ctx.moveTo(n,S[n]); else s.ctx.lineTo(n,S[n]);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale; s.ctx.beginPath();
    for(let n=1;n<=N;n++){const t=2*Math.sqrt(n); if(n===1) s.ctx.moveTo(n,t); else s.ctx.lineTo(n,t);}
    s.ctx.stroke();
  },
} satisfies Formula;
