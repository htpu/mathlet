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
  meta:{slug:'zoom-fft',title:'频谱缩放（FFT 局部）',domain:'signals',level:4,tex:'X(f)\\text{ around }f_0',blurb:'两个相近频率的分辨。'},
  params:[i('N','N',1024,256,4096),n('f1','f₁',100,1,200,0.1),n('f2','f₂',102,1,200,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const re=new Float64Array(N), im=new Float64Array(N);
    for(let i=0;i<N;i++){const t=i/N; re[i]=Math.sin(2*Math.PI*(p.f1 as number)*t)+Math.sin(2*Math.PI*(p.f2 as number)*t);}
    fft(re,im);
    let max=0; for(let i=0;i<N/2;i++) max=Math.max(max,Math.hypot(re[i],im[i]));
    const padX=24, padY=24, w=width-padX*2, h=height-padY*2;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let i=0;i<N/2;i++){const m=Math.hypot(re[i],im[i])/max; const px=padX+i/(N/2)*w, py=padY+h-m*h;
      if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py);}
    ctx.stroke();
  },
} satisfies Formula;
