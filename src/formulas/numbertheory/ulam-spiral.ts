import type { Formula } from '../types';
import { i } from '../types';
export default {
  meta:{slug:'ulam-spiral',title:'Ulam 螺旋',domain:'numbertheory',level:3,tex:'\\text{prime}(n)?',blurb:'按螺旋排布整数，标记素数，浮现对角线。',surface:'canvas2d'},
  params:[i('size','尺寸',201,51,401)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=(p.size as number)|1;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const isPrime=(n:number)=>{if(n<2) return false; for(let i=2;i*i<=n;i++) if(n%i===0) return false; return true;};
    const off=document.createElement('canvas'); off.width=N; off.height=N;
    const oc=off.getContext('2d')!; const img=oc.createImageData(N,N);
    let x=N>>1, y=N>>1, dx=1, dy=0, len=1, k=0, n=1;
    const set=(xx:number,yy:number,v:number)=>{const i=(yy*N+xx)*4; img.data[i]=v?255:10; img.data[i+1]=v?180:14; img.data[i+2]=v?84:20; img.data[i+3]=255;};
    for(let i=0;i<N*N;i++){
      if(x>=0&&x<N&&y>=0&&y<N) set(x,y,isPrime(n)?1:0);
      x+=dx; y+=dy; k++;
      if(k===len){k=0; const tmp=dx; dx=-dy; dy=tmp; if(dy===0) len++;}
      n++;
    }
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
