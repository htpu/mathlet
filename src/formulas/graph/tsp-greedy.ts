import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'tsp-greedy',title:'TSP 最近邻贪心',domain:'graph',level:3,tex:'\\text{at each step: visit nearest unvisited}',blurb:'快速但非最优解。',surface:'canvas2d'},
  params:[i('n','城市',20,5,40),i('seed','seed',3,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number][]=[]; for(let i=0;i<N;i++) pts.push([30+r()*(W-60), 30+r()*(H-60)]);
    const visited=new Array(N).fill(false); const order=[0]; visited[0]=true;
    for(let i=1;i<N;i++){let best=-1, bd=Infinity; const last=order[order.length-1];
      for(let j=0;j<N;j++){if(visited[j]) continue; const d=Math.hypot(pts[j][0]-pts[last][0], pts[j][1]-pts[last][1]); if(d<bd){bd=d; best=j;}}
      visited[best]=true; order.push(best);}
    order.push(0);
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2;
    ctx.beginPath();
    for(let i=0;i<order.length;i++){const [x,y]=pts[order[i]]; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);}
    ctx.stroke();
    ctx.fillStyle='#ffb454';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
