import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'birthday-paradox',title:'生日悖论',domain:'probability',level:2,tex:'P(\\text{至少同}\;) = 1 - \\prod(1-k/365)',blurb:'23 人时同生日概率 > 50%。'},
  params:[i('N','日历天数',365,5,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number; const M=Math.min(80, N);
    const v={cx:M/2,cy:0.5,scale:Math.min(s.width/M, s.height/1.05)};
    clear(s); setupView(s,v); drawAxes(s,v);
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let n=1;n<=M;n++){let p=1; for(let k=0;k<n;k++) p*=1-k/N; if(n===1) s.ctx.moveTo(n, 1-p); else s.ctx.lineTo(n, 1-p);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1/v.scale; s.ctx.setLineDash([0.5,0.5]);
    s.ctx.beginPath(); s.ctx.moveTo(0,0.5); s.ctx.lineTo(M,0.5); s.ctx.stroke(); s.ctx.setLineDash([]);
  },
} satisfies Formula;
