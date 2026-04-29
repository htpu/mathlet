import type { Formula } from '../types';
import { n, s as sel } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'biquad',title:'双二阶滤波器 (peaking)',domain:'signals',level:4,tex:'H(z)=\\frac{b_0+b_1z^{-1}+b_2z^{-2}}{1+a_1z^{-1}+a_2z^{-2}}',blurb:'调中心频率与 Q。'},
  params:[n('fc','中心频率',0.2,0.01,0.5,0.005),n('Q','Q',5,0.5,30,0.1),n('gain','增益 dB',6,-20,20,0.1),sel('type','类型','peak',[{value:'peak',label:'Peak'},{value:'lowpass',label:'Low'},{value:'highpass',label:'High'},{value:'notch',label:'Notch'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const fc=p.fc as number, Q=p.Q as number, gain=p.gain as number;
    const w0=2*Math.PI*fc, A=Math.pow(10, gain/40), alpha=Math.sin(w0)/(2*Q);
    let b0=1,b1=0,b2=0,a0=1,a1=0,a2=0;
    if(p.type==='peak'){b0=1+alpha*A; b1=-2*Math.cos(w0); b2=1-alpha*A; a0=1+alpha/A; a1=-2*Math.cos(w0); a2=1-alpha/A;}
    else if(p.type==='lowpass'){b0=(1-Math.cos(w0))/2; b1=1-Math.cos(w0); b2=(1-Math.cos(w0))/2; a0=1+alpha; a1=-2*Math.cos(w0); a2=1-alpha;}
    else if(p.type==='highpass'){b0=(1+Math.cos(w0))/2; b1=-(1+Math.cos(w0)); b2=(1+Math.cos(w0))/2; a0=1+alpha; a1=-2*Math.cos(w0); a2=1-alpha;}
    else {b0=1; b1=-2*Math.cos(w0); b2=1; a0=1+alpha; a1=-2*Math.cos(w0); a2=1-alpha;}
    const N=300;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2; ctx.beginPath();
    for(let i=0;i<N;i++){const w=Math.PI*i/N;
      const nr=b0+b1*Math.cos(-w)+b2*Math.cos(-2*w), ni=b1*Math.sin(-w)+b2*Math.sin(-2*w);
      const dr=a0+a1*Math.cos(-w)+a2*Math.cos(-2*w), di=a1*Math.sin(-w)+a2*Math.sin(-2*w);
      const m=Math.hypot(nr,ni)/Math.hypot(dr,di);
      const dB=20*Math.log10(m);
      const px=i/N*width, py=height/2-dB*height/60;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
