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
  meta:{slug:'cepstrum',title:'倒频谱 (cepstrum)',domain:'signals',level:5,tex:'C=|FFT(\\log|FFT(x)|^2)|',blurb:'用于回声 / 基频检测。'},
  params:[n('f0','基频',5,1,20,0.1),n('echo','回声延迟',20,5,100,0.5)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=512; const echo=Math.floor(p.echo as number);
    const re=new Float64Array(N), im=new Float64Array(N);
    for(let i=0;i<N;i++){const t=i/N; let x=Math.sin(2*Math.PI*(p.f0 as number)*t); if(i+echo<N) x+=0.5*Math.sin(2*Math.PI*(p.f0 as number)*(t-echo/N)); re[i]=x;}
    fft(re,im);
    const lg=new Float64Array(N), zr=new Float64Array(N);
    for(let i=0;i<N;i++) lg[i]=Math.log(re[i]*re[i]+im[i]*im[i]+1e-12);
    fft(lg,zr);
    const cep=new Float64Array(N/2); for(let i=0;i<N/2;i++) cep[i]=Math.hypot(lg[i],zr[i]);
    let max=0; for(let i=2;i<N/2;i++) max=Math.max(max,cep[i]);
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let i=2;i<N/2;i++){const px=i/(N/2)*width, py=height*0.95-cep[i]/max*height*0.85;
      if(i===2) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
