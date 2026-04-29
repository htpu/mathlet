import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'lowpass-filter',title:'一阶 RC 低通滤波器',domain:'signals',level:3,tex:'|H(f)|=\\frac{1}{\\sqrt{1+(f/f_c)^2}}',blurb:'幅频/相频响应（Bode 图）。'},
  params:[n('fc','截止频率 fc',1,0.1,10,0.01,true)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const h=height/2;
    const fmin=Math.log10(0.01), fmax=Math.log10(100);
    const fc=p.fc as number;
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=1; ctx.beginPath();
    for(let i=0;i<=20;i++){ctx.moveTo(i*width/20,0); ctx.lineTo(i*width/20,height);} ctx.stroke();
    // Magnitude
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<=400;i++){const lf=fmin+(fmax-fmin)*(i/400); const f=Math.pow(10,lf); const mag=20*Math.log10(1/Math.sqrt(1+(f/fc)**2));
      const x=(i/400)*width; const y=h*0.5-mag*h/120;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
    // Phase
    ctx.strokeStyle='#39bae6'; ctx.beginPath();
    for(let i=0;i<=400;i++){const lf=fmin+(fmax-fmin)*(i/400); const f=Math.pow(10,lf); const ph=-Math.atan(f/fc)*180/Math.PI;
      const x=(i/400)*width; const y=h+h*0.5-ph*h/180;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
    ctx.fillStyle='#cbccc6'; ctx.font='12px ui-monospace,monospace';
    ctx.fillText('|H(f)| dB', 8, 16);
    ctx.fillText('∠H(f) 度', 8, h+16);
  },
} satisfies Formula;
