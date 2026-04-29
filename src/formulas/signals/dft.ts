import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'dft',title:'DFT 公式可视化',domain:'signals',level:3,tex:'X_k=\\sum x_n e^{-2\\pi ikn/N}',blurb:'对一个频率 k 的傅里叶系数累加可视化。'},
  params:[i('N','N',32,8,128),i('k','k',3,0,32),n('signalFreq','信号频率',3,0.5,16,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number, k=p.k as number, f=p.signalFreq as number;
    const cx=width/2, cy=height/2; const R=Math.min(width,height)/3;
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();
    let Sr=0, Si=0;
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1; ctx.beginPath();
    let last=[cx,cy];
    for(let n=0;n<N;n++){const x=Math.sin(2*Math.PI*f*n/N); const ang=-2*Math.PI*k*n/N;
      const rx=x*Math.cos(ang)*R, ry=x*Math.sin(ang)*R;
      Sr+=Math.cos(ang)*x; Si+=Math.sin(ang)*x;
      ctx.lineTo(cx+rx, cy+ry);
    }
    ctx.stroke();
    const sx=cx+Sr/N*R*4, sy=cy+Si/N*R*4;
    ctx.fillStyle='#ffb454'; ctx.beginPath(); ctx.arc(sx,sy,8,0,Math.PI*2); ctx.fill();
    ctx.fillStyle='#cbccc6'; ctx.font='12px ui-monospace,monospace'; ctx.textAlign='left';
    ctx.fillText(`X_k = ${(Sr/N).toFixed(3)} + ${(Si/N).toFixed(3)}i`, 12, 16);
    ctx.fillText(`|X_k| = ${(Math.hypot(Sr,Si)/N).toFixed(4)}`, 12, 34);
  },
} satisfies Formula;
