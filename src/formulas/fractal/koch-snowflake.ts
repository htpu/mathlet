import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'koch-snowflake',title:'Koch 雪花',domain:'fractal',level:2,tex:'\\text{每边 → 4 段，长 1/3}',blurb:'三角形每边迭代尖凸。'},
  params:[i('iter','迭代',4,0,7)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    let pts:[number,number][] = [[0,0],[1,0],[0.5,Math.sqrt(3)/2],[0,0]];
    for(let it=0;it<(p.iter as number);it++){
      const nx:[number,number][]=[];
      for(let i=0;i<pts.length-1;i++){const a=pts[i], b=pts[i+1];
        const dx=(b[0]-a[0])/3, dy=(b[1]-a[1])/3;
        const p1:[number,number]=[a[0]+dx, a[1]+dy];
        const p3:[number,number]=[a[0]+2*dx, a[1]+2*dy];
        const ang=Math.atan2(dy,dx)-Math.PI/3;
        const len=Math.hypot(dx,dy);
        const p2:[number,number]=[p1[0]+len*Math.cos(ang), p1[1]+len*Math.sin(ang)];
        nx.push(a, p1, p2, p3);
      }
      nx.push(pts[pts.length-1]);
      pts=nx;
    }
    const sc=Math.min(width,height)*0.8;
    const ox=(width-sc)/2, oy=(height-sc*0.95)/2;
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.2;
    ctx.beginPath();
    for(let i=0;i<pts.length;i++){const x=ox+pts[i][0]*sc, y=oy+(0.95-pts[i][1])*sc;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
  },
} satisfies Formula;
