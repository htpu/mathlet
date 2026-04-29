import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'pellet-fibonacci',title:'Fibonacci 增长（log）',domain:'numbertheory',level:2,tex:'F_n\\sim\\frac{\\phi^n}{\\sqrt 5}',blurb:'log F_n 近似线性，斜率 = log φ。'},
  params:[i('N','N',30,5,80)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number;
    const F:number[]=[1,1]; for(let i=2;i<=N;i++) F.push(F[i-1]+F[i-2]);
    const lg=F.map(v=>Math.log(v)); const max=lg[N];
    const v={cx:N/2, cy:max/2, scale:Math.min(s.width/(N*1.05), s.height/(max*1.1))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<=N;i++){if(i===0) s.ctx.moveTo(i, lg[i]); else s.ctx.lineTo(i, lg[i]);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale; s.ctx.setLineDash([0.05,0.05]);
    s.ctx.beginPath();
    const phi=Math.log((1+Math.sqrt(5))/2);
    for(let i=0;i<=N;i++){if(i===0) s.ctx.moveTo(i, i*phi-Math.log(Math.sqrt(5))); else s.ctx.lineTo(i, i*phi-Math.log(Math.sqrt(5)));}
    s.ctx.stroke(); s.ctx.setLineDash([]);
  },
} satisfies Formula;
