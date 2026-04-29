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
  meta:{slug:'fft',title:'FFT 频谱',domain:'signals',level:3,tex:'X_k=\\sum x_n e^{-2\\pi ikn/N}',blurb:'三正弦叠加 + 时域/频域对照。',surface:'canvas2d'},
  params:[n('f1','f₁',5,0.5,30,0.1),n('f2','f₂',12,0.5,40,0.1),n('f3','f₃',20,0.5,60,0.1),n('a1','a₁',1,0,2,0.01),n('a2','a₂',0.6,0,2,0.01),n('a3','a₃',0.3,0,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=512; const re=new Float64Array(N), im=new Float64Array(N);
    for(let i=0;i<N;i++){const t=i/N; re[i]=(p.a1 as number)*Math.sin(2*Math.PI*(p.f1 as number)*t)+(p.a2 as number)*Math.sin(2*Math.PI*(p.f2 as number)*t)+(p.a3 as number)*Math.sin(2*Math.PI*(p.f3 as number)*t);}
    const sig=re.slice();
    fft(re,im);
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const halfH=height/2;
    // time domain
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5;
    ctx.beginPath();
    for(let i=0;i<N;i++){const x=(i/N)*width, y=halfH/2-sig[i]*halfH/8; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
    // frequency domain
    ctx.strokeStyle='#ffb454';
    ctx.beginPath();
    const half=N/2;
    let max=0; for(let i=0;i<half;i++){const m=Math.hypot(re[i],im[i]); if(m>max) max=m;}
    for(let i=0;i<half;i++){const m=Math.hypot(re[i],im[i])/max; const x=(i/half)*width; const y=halfH+halfH*0.95-m*halfH*0.9;
      ctx.moveTo(x,halfH+halfH*0.95); ctx.lineTo(x,y);}
    ctx.stroke();
    ctx.fillStyle='#cbccc6'; ctx.font='12px ui-monospace,monospace';
    ctx.fillText('time → ', 8, 18);
    ctx.fillText('freq |X(f)| ', 8, halfH+18);
  },
} satisfies Formula;
