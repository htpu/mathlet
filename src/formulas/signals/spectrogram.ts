import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
function fftMag(re:Float64Array, im:Float64Array){
  const N=re.length;
  for(let i=1,j=0;i<N;i++){let bit=N>>1; for(;j&bit;bit>>=1) j^=bit; j^=bit; if(i<j){[re[i],re[j]]=[re[j],re[i]];[im[i],im[j]]=[im[j],im[i]];}}
  for(let len=2;len<=N;len<<=1){const ang=-2*Math.PI/len; const wr=Math.cos(ang), wi=Math.sin(ang);
    for(let i=0;i<N;i+=len){let cr=1, ci=0; for(let k=0;k<len/2;k++){const ur=re[i+k], ui=im[i+k]; const vr=re[i+k+len/2]*cr-im[i+k+len/2]*ci; const vi=re[i+k+len/2]*ci+im[i+k+len/2]*cr; re[i+k]=ur+vr; im[i+k]=ui+vi; re[i+k+len/2]=ur-vr; im[i+k+len/2]=ui-vi; const nr=cr*wr-ci*wi; ci=cr*wi+ci*wr; cr=nr;}}
  }
}
export default {
  meta:{slug:'spectrogram',title:'频谱图（chirp）',domain:'signals',level:4,tex:'\\text{STFT}(t,f)',blurb:'线性 chirp 信号的时频图。'},
  params:[n('f0','起始频率',1,0.5,30,0.1),n('f1','结束频率',20,0.5,60,0.1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const winSize=128, hop=16;
    const totalLen=2048;
    const sig=new Float64Array(totalLen);
    const f0=p.f0 as number, f1=p.f1 as number;
    for(let i=0;i<totalLen;i++){const t=i/totalLen; const f=f0+(f1-f0)*t; sig[i]=Math.sin(2*Math.PI*f*t*30);}
    const cols=Math.floor((totalLen-winSize)/hop);
    const W=Math.min(width, cols*2), H=Math.min(height, winSize);
    const off=document.createElement('canvas'); off.width=cols; off.height=winSize/2;
    const oc=off.getContext('2d')!; const img=oc.createImageData(cols, winSize/2);
    for(let c=0;c<cols;c++){
      const re=new Float64Array(winSize), im=new Float64Array(winSize);
      for(let i=0;i<winSize;i++){const w=0.5*(1-Math.cos(2*Math.PI*i/winSize)); re[i]=sig[c*hop+i]*w;}
      fftMag(re,im);
      for(let f=0;f<winSize/2;f++){const m=Math.hypot(re[f],im[f]); const v=Math.min(1, Math.log10(1+m*5)/2);
        const k=((winSize/2-1-f)*cols+c)*4;
        img.data[k]=Math.floor(255*v*v); img.data[k+1]=Math.floor(180*v); img.data[k+2]=Math.floor(50*v*0.5); img.data[k+3]=255;}
    }
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=true;
    ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
