import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'buffon-needle',title:'布丰投针',domain:'probability',level:3,tex:'P=\\frac{2L}{\\pi d}\\Rightarrow\\pi\\approx\\frac{2L\\cdot N}{d\\cdot k}',blurb:'随机投针穿线条概率 → π 估计。',surface:'canvas2d'},
  params:[i('N','投针数',500,10,5000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const lines=8; const d=height/lines, L=d*0.7;
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=1;
    for(let i=0;i<=lines;i++){ctx.beginPath(); ctx.moveTo(0,i*d); ctx.lineTo(width,i*d); ctx.stroke();}
    const r=mulberry32((Date.now()^Math.floor(Math.random()*0xffffffff))>>>0);
    let cross=0;
    for(let i=0;i<(p.N as number);i++){const cx=r()*width, cy=r()*height; const ang=r()*Math.PI;
      const x1=cx-L/2*Math.cos(ang), y1=cy-L/2*Math.sin(ang);
      const x2=cx+L/2*Math.cos(ang), y2=cy+L/2*Math.sin(ang);
      const c=Math.floor(y1/d)!==Math.floor(y2/d);
      if(c) cross++;
      ctx.strokeStyle=c?'#ffb454':'rgba(57,186,230,0.5)'; ctx.lineWidth=1.5;
      ctx.beginPath(); ctx.moveTo(x1,y1); ctx.lineTo(x2,y2); ctx.stroke();
    }
    const piEst = cross>0 ? (2*L*(p.N as number))/(d*cross) : 0;
    text(s,12,12,`π ≈ ${piEst.toFixed(4)} (cross=${cross}/${p.N})`,'#ffb454',14);
  },
} satisfies Formula;
