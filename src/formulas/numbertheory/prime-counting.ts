import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'prime-counting',title:'π(n) 与 n/ln n',domain:'numbertheory',level:3,tex:'\\pi(n)\\sim n/\\ln n',blurb:'素数计数函数 vs 素数定理近似。'},
  params:[i('N','N',1000,30,20000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number;
    const isP=new Uint8Array(N+1); for(let i=2;i<=N;i++) isP[i]=1;
    for(let i=2;i*i<=N;i++) if(isP[i]) for(let j=i*i;j<=N;j+=i) isP[j]=0;
    const v={cx:N/2, cy:N/Math.log(N)/2, scale:Math.min(s.width/(N*1.05), s.height/(N/Math.log(N)*1.5))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    let cnt=0; for(let n=2;n<=N;n++){if(isP[n]) cnt++; if(n===2) s.ctx.moveTo(n,cnt); else s.ctx.lineTo(n,cnt);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale; s.ctx.beginPath();
    for(let n=2;n<=N;n++){const t=n/Math.log(n); if(n===2) s.ctx.moveTo(n,t); else s.ctx.lineTo(n,t);}
    s.ctx.stroke();
  },
} satisfies Formula;
