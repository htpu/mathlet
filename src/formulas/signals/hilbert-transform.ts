import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'hilbert-transform',title:'Hilbert 变换 / 解析信号',domain:'signals',level:4,tex:'\\hat x(t)=\\frac{1}{\\pi}\\text{p.v.}\\int\\frac{x(\\tau)}{t-\\tau}d\\tau',blurb:'90° 相移得到正交分量。'},
  params:[n('f','频率',5,0.5,15,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=300; const f=p.f as number;
    const draw=(fn:(t:number)=>number, color:string, yo:number)=>{ctx.strokeStyle=color; ctx.lineWidth=1.5; ctx.beginPath();
      for(let i=0;i<N;i++){const t=i/N; const x=t*width, y=yo-fn(t)*30;
        if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);} ctx.stroke();};
    draw(t=>Math.cos(2*Math.PI*f*t),'#39bae6',height*0.3);
    draw(t=>Math.sin(2*Math.PI*f*t),'#ffb454',height*0.6);
    ctx.fillStyle='#cbccc6'; ctx.font='13px ui-monospace,monospace';
    ctx.fillText('x(t) = cos(2πft)', 12, 14);
    ctx.fillText('Hilbert 变换 = sin(2πft) (90° 相移)', 12, height*0.5);
  },
} satisfies Formula;
