import { i, n as nn } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'spanning-tree',title:'最小生成树 (Kruskal)',domain:'graph',level:3,tex:'\\text{MST: total weight minimized}',blurb:'按边权升序加入不成环边。',surface:'canvas2d'},
  params:[i('n','节点',20,5,40),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number][]=[]; for(let i=0;i<N;i++) pts.push([20+r()*(W-40), 20+r()*(H-40)]);
    const edges:[number,number,number][]=[];
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){const d=Math.hypot(pts[i][0]-pts[j][0], pts[i][1]-pts[j][1]); edges.push([i,j,d]);}
    edges.sort((a,b)=>a[2]-b[2]);
    const par=Array.from({length:N},(_,i)=>i);
    function find(x:number):number{return par[x]===x?x:(par[x]=find(par[x]));}
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=0.5;
    for(const [a,b] of edges){ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.lineTo(pts[b][0],pts[b][1]); ctx.stroke();}
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2.5;
    for(const [a,b] of edges){const fa=find(a), fb=find(b); if(fa!==fb){par[fa]=fb; ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.lineTo(pts[b][0],pts[b][1]); ctx.stroke();}}
    ctx.fillStyle='#ffb454';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
