import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'voronoi',title:'Voronoi 图',domain:'geometry',level:3,tex:'V(p)=\\{x:|x-p|\\le|x-p_i|\\,\\forall i\\}',blurb:'每点最近站点的色块 = Voronoi 图。',surface:'canvas2d'},
  params:[i('N','站点数',12,3,40),i('seed','种子',1,1,100)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    const N=p.N as number;
    const r=mulberry32(p.seed as number);
    const pts:[number,number,string][]=[];
    for(let i=0;i<N;i++) pts.push([r()*width, r()*height, `hsl(${i*360/N},70%,50%)`]);
    const W=Math.floor(width/2), H=Math.floor(height/2);
    const off=document.createElement('canvas'); off.width=W; off.height=H;
    const oc=off.getContext('2d')!; const img=oc.createImageData(W,H);
    for(let py=0;py<H;py++) for(let px=0;px<W;px++){
      let bd=Infinity, bi=0;
      for(let i=0;i<N;i++){const dx=pts[i][0]/2-px, dy=pts[i][1]/2-py; const d=dx*dx+dy*dy; if(d<bd){bd=d; bi=i;}}
      const col=pts[bi][2];
      // parse hsl
      const m=col.match(/hsl\((\d+),(\d+)%,(\d+)%\)/)!;
      const h=parseInt(m[1]), sat=parseInt(m[2])/100, l=parseInt(m[3])/100;
      const c=(1-Math.abs(2*l-1))*sat; const x=c*(1-Math.abs(((h/60)%2)-1)); const m2=l-c/2;
      let R=0,G=0,B=0;
      if(h<60){R=c;G=x;}else if(h<120){R=x;G=c;}else if(h<180){G=c;B=x;}else if(h<240){G=x;B=c;}else if(h<300){R=x;B=c;}else{R=c;B=x;}
      const k=(py*W+px)*4;
      img.data[k]=Math.floor((R+m2)*255); img.data[k+1]=Math.floor((G+m2)*255); img.data[k+2]=Math.floor((B+m2)*255); img.data[k+3]=255;
    }
    oc.putImageData(img,0,0);
    ctx.imageSmoothingEnabled=false;
    ctx.drawImage(off,0,0,width,height);
    ctx.fillStyle='#fff';
    for(const pt of pts){ctx.beginPath(); ctx.arc(pt[0],pt[1],3,0,Math.PI*2); ctx.fill();}
  },
} satisfies Formula;
