import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'dragon-curve',title:'Heighway 龙曲线',domain:'fractal',level:3,tex:'\\text{paper folding}',blurb:'纸条对折展开极限即龙曲线。'},
  params:[i('iter','迭代',12,4,18)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.iter as number;
    let turns:string='';
    for(let it=0;it<N;it++){turns=turns+'L'+turns.split('').reverse().map(c=>c==='L'?'R':'L').join('');}
    let x=0, y=0, ang=0; const len=1;
    const pts:[number,number][]=[[0,0]];
    let minX=0, minY=0, maxX=0, maxY=0;
    for(const c of turns){if(c==='L') ang-=Math.PI/2; else ang+=Math.PI/2;
      x+=len*Math.cos(ang); y+=len*Math.sin(ang); pts.push([x,y]);
      minX=Math.min(minX,x); maxX=Math.max(maxX,x); minY=Math.min(minY,y); maxY=Math.max(maxY,y);
    }
    const sc=Math.min(width/(maxX-minX), height/(maxY-minY))*0.85;
    const ox=(width-(maxX-minX)*sc)/2-minX*sc, oy=(height-(maxY-minY)*sc)/2-minY*sc;
    ctx.strokeStyle='#c2d94c'; ctx.lineWidth=1; ctx.beginPath();
    for(let i=0;i<pts.length;i++){const xx=ox+pts[i][0]*sc, yy=oy+pts[i][1]*sc; if(i===0) ctx.moveTo(xx,yy); else ctx.lineTo(xx,yy);}
    ctx.stroke();
  },
} satisfies Formula;
