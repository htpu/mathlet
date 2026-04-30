import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'birthday-collision',title:'生日碰撞模拟',domain:'probability',level:2,tex:'\\text{trials until collision}',blurb:'随机抽 1..N，统计首次重复出现位置。'},
  params:[i('N','池大小 N',365,10,10000),i('runs','试验数',2000,100,10000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const r=mulberry32((Date.now()^Math.floor(Math.random()*0xffffffff))>>>0);
    const N=p.N as number, R=p.runs as number;
    const Ts:number[]=[];
    for(let k=0;k<R;k++){const s=new Set<number>(); let t=0; while(true){t++; const x=Math.floor(r()*N); if(s.has(x)) break; s.add(x);} Ts.push(t);}
    const max=Math.max(...Ts);
    const bins=40, counts=new Array(bins).fill(0);
    for(const t of Ts) counts[Math.min(bins-1,Math.floor(t/max*bins))]++;
    const cmax=Math.max(...counts);
    const pad=24, w=width-pad*2, h=height-pad*2; const bw=w/bins;
    for(let i=0;i<bins;i++){ctx.fillStyle='#39bae6'; ctx.fillRect(pad+i*bw, pad+h-counts[i]/cmax*h, bw-1, counts[i]/cmax*h);}
    const expected=Math.sqrt(Math.PI*N/2);
    const mean=Ts.reduce((a,b)=>a+b,0)/R;
    ctx.fillStyle='#ffb454'; ctx.font='13px ui-monospace,monospace';
    ctx.fillText(`Mean=${mean.toFixed(2)}, √(πN/2)=${expected.toFixed(2)}`, 12, 14);
  },
} satisfies Formula;
