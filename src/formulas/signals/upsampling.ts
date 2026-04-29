import type { Formula } from '../types';
import { i, n } from '../types';
import { clear, drawAxes, setupView, fillCircle, plotFn } from '../../render/canvas2d';
export default {
  meta:{slug:'upsampling',title:'插值与抽取 (L↑M↓)',domain:'signals',level:3,tex:'y[n]=\\sum x[k]h[n-Lk]',blurb:'L 倍插值后通过低通滤波。'},
  params:[i('L','插值倍数',3,1,8),n('f','信号频率',2,0.5,8,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0.5,cy:0,scale:Math.min(s.width,s.height)/2.5};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    const L=p.L as number, f=p.f as number;
    const N=20;
    for(let i=0;i<=N;i++){const t=i/N; const y=Math.sin(2*Math.PI*f*t); fillCircle(s,v,t,y,4,'#39bae6');}
    plotFn(s,v,t=>Math.sin(2*Math.PI*f*t),'#ffb454');
  },
} satisfies Formula;
