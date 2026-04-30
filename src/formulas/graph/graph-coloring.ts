import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'graph-coloring',title:'图着色 (贪心)',domain:'graph',level:3,tex:'\\chi(G)\\leq\\Delta(G)+1',blurb:'相邻顶点不同色。',surface:'canvas2d'},
  params:[i('n','节点',16,5,30),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number;
    const pts:[number,number][]=[]; for(let i=0;i<N;i++){const a=2*Math.PI*i/N; pts.push([W/2+W*0.35*Math.cos(a), H/2+H*0.35*Math.sin(a)]);}
    const adj:Set<number>[]=Array.from({length:N},()=>new Set());
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++) if(r()<0.25){adj[i].add(j); adj[j].add(i);}
    const cols=['#ffb454','#39bae6','#c2d94c','#d2a6ff','#f07178','#ffd166'];
    const color=new Array(N).fill(-1);
    for(let i=0;i<N;i++){const used=new Set<number>(); for(const j of adj[i]) if(color[j]>=0) used.add(color[j]); for(let c=0;c<cols.length;c++) if(!used.has(c)){color[i]=c; break;}}
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=1;
    for(let i=0;i<N;i++) for(const j of adj[i]) if(j>i){ctx.beginPath(); ctx.moveTo(pts[i][0],pts[i][1]); ctx.lineTo(pts[j][0],pts[j][1]); ctx.stroke();}
    for(let i=0;i<N;i++){ctx.fillStyle=cols[color[i]]||'#fff'; ctx.beginPath(); ctx.arc(pts[i][0],pts[i][1],8,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
