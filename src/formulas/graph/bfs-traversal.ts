import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'bfs-traversal',title:'BFS 广度优先',domain:'graph',level:3,tex:'\\text{level-order from root}',blurb:'同心环展示访问层级。',surface:'canvas2d',animated:true},
  params:[i('n','节点',30,5,80),i('seed','seed',5,1,200)],
  render(s,p,t){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number][]=[]; for(let i=0;i<N;i++) pts.push([20+r()*(W-40), 20+r()*(H-40)]);
    const adj:number[][]=Array.from({length:N},()=>[]);
    for(let i=0;i<N;i++){let nearest=-1, dist=Infinity; for(let j=0;j<N;j++){if(i===j) continue; const d=(pts[i][0]-pts[j][0])**2+(pts[i][1]-pts[j][1])**2; if(d<dist){dist=d; nearest=j;}} if(nearest>=0){adj[i].push(nearest); adj[nearest].push(i);}}
    const order:number[]=[]; const lvl=new Array(N).fill(-1); const q=[0]; lvl[0]=0;
    while(q.length){const u=q.shift()!; order.push(u); for(const v of adj[u]) if(lvl[v]<0){lvl[v]=lvl[u]+1; q.push(v);}}
    const phase=Math.floor((t*3)%order.length);
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=1;
    for(let i=0;i<N;i++) for(const j of adj[i]) if(j>i){ctx.beginPath(); ctx.moveTo(pts[i][0],pts[i][1]); ctx.lineTo(pts[j][0],pts[j][1]); ctx.stroke();}
    for(let i=0;i<N;i++){const visited=order.indexOf(i)<=phase;
      ctx.fillStyle=visited?'#ffb454':'#3a3f4b';
      ctx.beginPath(); ctx.arc(pts[i][0],pts[i][1],5,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
