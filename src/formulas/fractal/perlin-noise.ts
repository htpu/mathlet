import type { Formula } from '../types';
import { n, i } from '../types';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'perlin-noise',title:'分形噪声 (fBm)',domain:'fractal',level:3,tex:'fBm=\\sum a^i\\,n(b^i x)',blurb:'多倍频噪声叠加 = 分形布朗运动。',surface:'canvas2d'},
  params:[i('octaves','倍频数',5,1,8),n('persistence','持续度',0.5,0.1,0.9,0.01),n('scale','尺度',0.05,0.01,0.3,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const W=200, H=200;
    const r=mulberry32(7);
    const grad:[number,number][][]=[];
    for(let i=0;i<8;i++){const row:[number,number][]=[]; for(let j=0;j<8;j++){const a=r()*Math.PI*2; row.push([Math.cos(a),Math.sin(a)]);} grad.push(row);}
    function lerp(a:number,b:number,t:number){return a+(b-a)*t*t*(3-2*t);}
    function noise(x:number,y:number):number{const ix=Math.floor(x)&7, iy=Math.floor(y)&7; const fx=x-Math.floor(x), fy=y-Math.floor(y);
      const g00=grad[ix][iy], g10=grad[(ix+1)&7][iy], g01=grad[ix][(iy+1)&7], g11=grad[(ix+1)&7][(iy+1)&7];
      const d00=g00[0]*fx+g00[1]*fy, d10=g10[0]*(fx-1)+g10[1]*fy, d01=g01[0]*fx+g01[1]*(fy-1), d11=g11[0]*(fx-1)+g11[1]*(fy-1);
      return lerp(lerp(d00,d10,fx), lerp(d01,d11,fx), fy);}
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    for(let py=0;py<H;py++) for(let px=0;px<W;px++){
      let v=0, amp=1, fr=p.scale as number;
      for(let o=0;o<(p.octaves as number);o++){v+=amp*noise(px*fr, py*fr); amp*=p.persistence as number; fr*=2;}
      const t=(v+1)/2; const k=(py*W+px)*4;
      img.data[k]=Math.floor(255*t*0.6+30); img.data[k+1]=Math.floor(255*t*0.7+20); img.data[k+2]=Math.floor(255*t*0.5+50); img.data[k+3]=255;
    }
    oc.putImageData(img,0,0); ctx.imageSmoothingEnabled=true; ctx.drawImage(off,0,0,width,height);
  },
} satisfies Formula;
