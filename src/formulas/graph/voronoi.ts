import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'voronoi',title:'Voronoi 图',domain:'graph',level:3,tex:'\\text{partition by nearest seed}',blurb:'平面按最近种子点划分区域。',surface:'canvas2d'},
  params:[i('n','种子数',12,3,40),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number,string][]=[];
    const cols=['#39bae6','#ffb454','#c2d94c','#d2a6ff','#f07178','#ffd166','#ff6b35','#4ecdc4'];
    for(let i=0;i<N;i++) pts.push([r()*W, r()*H, cols[i%cols.length]]);
    const img=ctx.createImageData(W,H);
    for(let y=0;y<H;y+=2) for(let x=0;x<W;x+=2){
      let best=Infinity, idx=0;
      for(let i=0;i<N;i++){const dx=x-pts[i][0], dy=y-pts[i][1]; const d=dx*dx+dy*dy; if(d<best){best=d; idx=i;}}
      const col=pts[idx][2]; const r2=parseInt(col.slice(1,3),16), g2=parseInt(col.slice(3,5),16), b2=parseInt(col.slice(5,7),16);
      for(let dy=0;dy<2;dy++) for(let dx=0;dx<2;dx++){const k=((y+dy)*W+(x+dx))*4; img.data[k]=r2; img.data[k+1]=g2; img.data[k+2]=b2; img.data[k+3]=160;}
    }
    ctx.putImageData(img,0,0);
    ctx.fillStyle='#fff';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
