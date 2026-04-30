import { i } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'eulerian-path',title:'欧拉路径 (Königsberg)',domain:'graph',level:2,tex:'\\text{exists iff }\\leq 2\\text{ odd-degree vertices}',blurb:'七桥问题：奇度顶点 4 个 → 无解。',surface:'canvas2d'},
  params:[],
  render(s){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const cx=W/2, cy=H/2, R=Math.min(W,H)*0.32;
    const pts:[number,number][]=[[cx,cy-R],[cx-R,cy],[cx+R,cy],[cx,cy+R]];
    const edges:[number,number][]=[[0,1],[0,1],[0,2],[0,2],[1,3],[2,3],[1,2]];
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2;
    for(let i=0;i<edges.length;i++){const [a,b]=edges[i]; const off=(edges.slice(0,i).filter(e=>(e[0]===a&&e[1]===b)||(e[0]===b&&e[1]===a)).length-0.5)*15;
      const mx=(pts[a][0]+pts[b][0])/2, my=(pts[a][1]+pts[b][1])/2;
      const dx=pts[b][0]-pts[a][0], dy=pts[b][1]-pts[a][1]; const len=Math.hypot(dx,dy);
      const nx=-dy/len, ny=dx/len;
      ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.quadraticCurveTo(mx+nx*off, my+ny*off, pts[b][0],pts[b][1]); ctx.stroke();}
    ctx.fillStyle='#ffb454';
    for(let i=0;i<pts.length;i++){const [x,y]=pts[i]; ctx.beginPath(); ctx.arc(x,y,8,0,Math.PI*2); ctx.fill(); ctx.fillStyle='#0a0e14'; ctx.font='14px monospace'; ctx.fillText(['A','B','C','D'][i], x-4, y+5); ctx.fillStyle='#ffb454';}
  },
};
export default f;
