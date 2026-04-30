import { i, n as nn } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'small-world',title:'小世界网络 (Watts-Strogatz)',domain:'graph',level:4,tex:'\\text{rewire prob }p',blurb:'规则环 + 随机重连产生小世界。',surface:'canvas2d'},
  params:[i('n','节点',24,8,60),nn('p','重连 p',0.1,0,1,0.001),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const N=p.n as number, prob=p.p as number, K=2;
    const r=mulberry32(p.seed as number);
    const cx=W/2, cy=H/2, R=Math.min(W,H)*0.4;
    const pts:[number,number][]=[];
    for(let i=0;i<N;i++){const a=2*Math.PI*i/N; pts.push([cx+R*Math.cos(a), cy+R*Math.sin(a)]);}
    const edges:[number,number][]=[];
    for(let i=0;i<N;i++) for(let k=1;k<=K;k++){let j=(i+k)%N; if(r()<prob) j=Math.floor(r()*N); if(i!==j) edges.push([i,j]);}
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=0.6;
    for(const [a,b] of edges){ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.lineTo(pts[b][0],pts[b][1]); ctx.stroke();}
    ctx.fillStyle='#ffb454';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
