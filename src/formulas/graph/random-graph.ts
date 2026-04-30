import { i, n as nn } from '../types';
import type { Formula } from '../types';
import { mulberry32 } from '../../render/numerics';
const f:Formula = {
  meta:{slug:'random-graph',title:'Erdős-Rényi 随机图',domain:'graph',level:3,tex:'G(n,p):\\ \\text{每边概率 }p',blurb:'p > log(n)/n 时连通。',surface:'canvas2d'},
  params:[i('n','节点',20,4,60),nn('p','p',0.15,0,1,0.001),i('seed','seed',7,1,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const r=mulberry32(p.seed as number); const N=p.n as number, prob=p.p as number;
    const cx=W/2, cy=H/2, R=Math.min(W,H)*0.4;
    const pts:[number,number][]=[];
    for(let i=0;i<N;i++){const a=2*Math.PI*i/N; pts.push([cx+R*Math.cos(a), cy+R*Math.sin(a)]);}
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=0.6; ctx.globalAlpha=0.7;
    for(let i=0;i<N;i++) for(let j=i+1;j<N;j++) if(r()<prob){ctx.beginPath(); ctx.moveTo(pts[i][0],pts[i][1]); ctx.lineTo(pts[j][0],pts[j][1]); ctx.stroke();}
    ctx.globalAlpha=1; ctx.fillStyle='#ffb454';
    for(const [x,y] of pts){ctx.beginPath(); ctx.arc(x,y,4,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
