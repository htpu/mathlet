import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView, plotFn, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'sampling-aliasing',title:'采样混叠',domain:'signals',level:3,tex:'f_s>2f \\text{ (Nyquist)}',blurb:'采样率 fs 不足时高频伪装为低频。',surface:'canvas2d'},
  params:[n('f','信号频率 f',5,0.5,30,0.1),n('fs','采样率 fs',8,1,40,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/2.4};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const f=p.f as number, fs=p.fs as number;
    plotFn(s,v,t=>Math.sin(2*Math.PI*f*t)*0.8,'#2d3340');
    const N=Math.floor(fs);
    const samples:[number,number][]=[];
    for(let i=0;i<=N;i++){const t=i/fs; if(t<=1){const y=Math.sin(2*Math.PI*f*t)*0.8; samples.push([t,y]); fillCircle(s,v,t,y,4,'#ffb454');}}
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath();
    for(let i=0;i<samples.length;i++){const [x,y]=samples[i]; if(i===0) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
    s.ctx.stroke();
  },
} satisfies Formula;
