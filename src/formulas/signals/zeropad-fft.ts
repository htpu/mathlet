import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
function fft(re:Float64Array, im:Float64Array){
  const N=re.length;
  for(let i=1,j=0;i<N;i++){let bit=N>>1; for(;j&bit;bit>>=1) j^=bit; j^=bit; if(i<j){[re[i],re[j]]=[re[j],re[i]];[im[i],im[j]]=[im[j],im[i]];}}
  for(let len=2;len<=N;len<<=1){const ang=-2*Math.PI/len; const wr=Math.cos(ang), wi=Math.sin(ang);
    for(let i=0;i<N;i+=len){let cr=1, ci=0; for(let k=0;k<len/2;k++){const ur=re[i+k], ui=im[i+k]; const vr=re[i+k+len/2]*cr-im[i+k+len/2]*ci; const vi=re[i+k+len/2]*ci+im[i+k+len/2]*cr; re[i+k]=ur+vr; im[i+k]=ui+vi; re[i+k+len/2]=ur-vr; im[i+k+len/2]=ui-vi; const nr=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=nr;}}
  }
}
export default {
  meta:{slug:'zeropad-fft',title:'FFT 零填充（频域插值）',domain:'signals',level:3,tex:'\\text{zero-pad} \\to \\text{spectral interpolation}',blurb:'信号补零后频谱密集化（不增分辨率）。'},
  params:[i('N','信号长 N',32,8,256),i('pad','补零总长',512,32,2048),n('f','信号频率',5,0.5,15,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number, M=p.pad as number, f=p.f as number;
    const re=new Float64Array(M), im=new Float64Array(M);
    for(let i=0;i<N;i++) re[i]=Math.sin(2*Math.PI*f*i/N);
    fft(re,im);
    let max=0; for(let i=0;i<M/2;i++){const m=Math.hypot(re[i],im[i]); if(m>max) max=m;}
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let i=0;i<M/2;i++){const x=i/(M/2)*width; const m=Math.hypot(re[i],im[i])/max; const y=height*0.95-m*height*0.85;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
  },
} satisfies Formula;
