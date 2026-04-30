import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'galton-board',title:'高尔顿钉板',domain:'probability',level:2,tex:'X=\\sum X_i\\to\\mathcal N',blurb:'小球碰钉左右等概率，落点直方近似正态。',surface:'canvas2d'},
  params:[i('rows','行数',16,4,40),i('balls','球数',1000,10,5000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const rows=p.rows as number, balls=p.balls as number;
    const r=mulberry32((Date.now()^Math.floor(Math.random()*0xffffffff))>>>0);
    const counts=new Array(rows+1).fill(0);
    for(let b=0;b<balls;b++){let k=0; for(let i=0;i<rows;i++) if(r()<0.5) k++; counts[k]++;}
    const max=Math.max(...counts);
    // pegs
    const padY=20, padX=20;
    const pegArea=height*0.5;
    for(let i=0;i<rows;i++) for(let j=0;j<=i;j++){
      const x=width/2+(j-i/2)*pegArea/rows; const y=padY+i*pegArea/rows;
      ctx.fillStyle='#2d3340'; ctx.beginPath(); ctx.arc(x,y,2,0,Math.PI*2); ctx.fill();
    }
    const histArea=height-pegArea-padY*2;
    const bw=(width-padX*2)/(rows+1);
    for(let k=0;k<=rows;k++){const x=padX+k*bw; const bh=counts[k]/max*histArea;
      ctx.fillStyle='#ffb454'; ctx.fillRect(x, padY+pegArea+histArea-bh, bw-1, bh);}
  },
} satisfies Formula;
