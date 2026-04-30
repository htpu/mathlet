import { i } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'barabasi-albert',title:'BA 无标度网络',domain:'graph',level:4,tex:'P(k)\\propto k^{-\\gamma}',blurb:'优先连接产生幂律度分布。',surface:'canvas2d'},
  params:[i('n','节点',40,5,150),i('m','每步加边 m',2,1,5),i('seed','seed',5,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const N=p.n as number, M=p.m as number;
    const r=mulberry32(p.seed as number);
    const deg=new Array(N).fill(0);
    const edges:[number,number][]=[];
    for(let i=1;i<N;i++){const m=Math.min(M,i); const total=edges.length*2; const sel=new Set<number>();
      while(sel.size<m){let pick:number;
        if(total===0) pick=Math.floor(r()*i);
        else{let acc=r()*total, c=0; for(let j=0;j<i;j++){c+=deg[j]; if(c>=acc){pick=j; break;}} pick=pick!??Math.floor(r()*i);}
        if(pick<i && !sel.has(pick)) sel.add(pick);
      }
      for(const j of sel){edges.push([i,j]); deg[i]++; deg[j]++;}}
    const pts:[number,number][]=[];
    for(let i=0;i<N;i++){const a=2*Math.PI*i/N; const R=Math.min(W,H)*0.4; pts.push([W/2+R*Math.cos(a), H/2+R*Math.sin(a)]);}
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=0.5;
    for(const [a,b] of edges){ctx.beginPath(); ctx.moveTo(pts[a][0],pts[a][1]); ctx.lineTo(pts[b][0],pts[b][1]); ctx.stroke();}
    for(let i=0;i<N;i++){const sz=2+deg[i]*0.4;
      ctx.fillStyle='#ffb454';
      ctx.beginPath(); ctx.arc(pts[i][0],pts[i][1],sz,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
