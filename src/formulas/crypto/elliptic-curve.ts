import { n } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'elliptic-curve',title:'椭圆曲线 y² = x³ + ax + b',domain:'crypto',level:4,tex:'y^2=x^3+ax+b',blurb:'实数域椭圆曲线形状。',surface:'canvas2d'},
  params:[n('a','a',-1,-3,3,0.01),n('b','b',1,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const sc=Math.min(W,H)/8;
    const cx=W/2, cy=H/2;
    ctx.strokeStyle='#3a3f4b';
    ctx.beginPath(); ctx.moveTo(0,cy); ctx.lineTo(W,cy); ctx.moveTo(cx,0); ctx.lineTo(cx,H); ctx.stroke();
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2;
    ctx.beginPath();
    let started=false;
    for(let px=0;px<W;px+=1){const x=(px-cx)/sc; const v=x*x*x+(p.a as number)*x+(p.b as number); if(v>=0){const y=Math.sqrt(v); const Y=cy-y*sc; if(!started){ctx.moveTo(px,Y); started=true;} else ctx.lineTo(px,Y);}}
    ctx.stroke();
    ctx.beginPath(); started=false;
    for(let px=0;px<W;px+=1){const x=(px-cx)/sc; const v=x*x*x+(p.a as number)*x+(p.b as number); if(v>=0){const y=-Math.sqrt(v); const Y=cy-y*sc; if(!started){ctx.moveTo(px,Y); started=true;} else ctx.lineTo(px,Y);}}
    ctx.stroke();
  },
};
export default f;
