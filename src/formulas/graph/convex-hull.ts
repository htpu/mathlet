import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'convex-hull',title:'凸包 (Graham scan)',domain:'graph',level:3,tex:'\\text{smallest convex polygon}',blurb:'随机点集的凸包。',surface:'canvas2d'},
  params:[i('n','点数',30,5,200),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number);
    const pts:[number,number][]=[];
    for(let i=0;i<(p.n as number);i++) pts.push([20+r()*(W-40), 20+r()*(H-40)]);
    pts.sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
    const cross=(o:[number,number],a:[number,number],b:[number,number])=>(a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0]);
    const lower:[number,number][]=[];
    for(const p of pts){while(lower.length>=2 && cross(lower[lower.length-2],lower[lower.length-1],p)<=0) lower.pop(); lower.push(p);}
    const upper:[number,number][]=[];
    for(let i=pts.length-1;i>=0;i--){const p=pts[i]; while(upper.length>=2 && cross(upper[upper.length-2],upper[upper.length-1],p)<=0) upper.pop(); upper.push(p);}
    const hull=[...lower.slice(0,-1), ...upper.slice(0,-1)];
    ctx.fillStyle='#39bae6';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,2.5,0,Math.PI*2); ctx.fill();}
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=2;
    ctx.beginPath();
    for(let i=0;i<hull.length;i++){const [x,y]=hull[i]; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.closePath(); ctx.stroke();
  },
};
export default f;
