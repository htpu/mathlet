import { i, n as nn } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'force-directed',title:'力导向图布局',domain:'graph',level:4,tex:'\\text{spring + repulsion}',blurb:'弹簧拉近相邻，电荷推远全部。',surface:'canvas2d',animated:true},
  params:[i('n','节点',20,5,50),i('seed','seed',3,1,200),nn('K','弹簧',0.05,0.001,0.3,0.001)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number][]=(this as any)._pts||[]; const adj:[number,number][]=(this as any)._edges||[];
    if(pts.length!==N || (this as any)._sig!==`${p.n}|${p.seed}`){pts.length=0; adj.length=0;
      for(let i=0;i<N;i++) pts.push([W/2+r()*40-20, H/2+r()*40-20]);
      for(let i=1;i<N;i++) adj.push([i, Math.floor(r()*i)]);
      (this as any)._pts=pts; (this as any)._edges=adj; (this as any)._sig=`${p.n}|${p.seed}`;}
    const K=p.K as number;
    for(let it=0;it<5;it++){const fx=new Array(N).fill(0), fy=new Array(N).fill(0);
      for(let i=0;i<N;i++) for(let j=i+1;j<N;j++){const dx=pts[i][0]-pts[j][0], dy=pts[i][1]-pts[j][1]; const d2=Math.max(20,dx*dx+dy*dy); const f=600/d2; fx[i]+=dx*f/Math.sqrt(d2); fy[i]+=dy*f/Math.sqrt(d2); fx[j]-=dx*f/Math.sqrt(d2); fy[j]-=dy*f/Math.sqrt(d2);}
      for(const [a,b] of adj){const dx=pts[a][0]-pts[b][0], dy=pts[a][1]-pts[b][1]; fx[a]-=dx*K; fy[a]-=dy*K; fx[b]+=dx*K; fy[b]+=dy*K;}
      for(let i=0;i<N;i++){pts[i][0]+=Math.max(-3,Math.min(3,fx[i]*0.1)); pts[i][1]+=Math.max(-3,Math.min(3,fy[i]*0.1)); pts[i][0]+= (W/2-pts[i][0])*0.001; pts[i][1]+= (H/2-pts[i][1])*0.001;}}
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=1;
    for(const [a,b] of adj){ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.lineTo(pts[b][0],pts[b][1]); ctx.stroke();}
    ctx.fillStyle='#ffb454';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,5,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
