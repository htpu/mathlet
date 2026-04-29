import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
import { mulberry32 } from '../../render/numerics';
export default {
  meta:{slug:'coupon-collector',title:'集卡问题',domain:'probability',level:3,tex:'E[T_n]=n H_n\\approx n\\ln n',blurb:'集齐 n 种卡片所需平均次数。'},
  params:[i('n','卡种 n',20,2,200),i('runs','试验数',200,10,2000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/((p.n as number)*5)};
    const r=mulberry32(7);
    const Ts:number[]=[];
    for(let k=0;k<(p.runs as number);k++){const seen=new Set<number>(); let t=0; while(seen.size<(p.n as number)){t++; seen.add(Math.floor(r()*(p.n as number)));} Ts.push(t);}
    Ts.sort((a,b)=>a-b);
    const max=Ts[Ts.length-1];
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const bins=40; const counts=new Array(bins).fill(0);
    for(const t of Ts) counts[Math.min(bins-1, Math.floor(t/max*bins))]++;
    const cmax=Math.max(...counts);
    const pad=24, w=width-pad*2, h=height-pad*2; const bw=w/bins;
    for(let i=0;i<bins;i++){ctx.fillStyle='#39bae6'; ctx.fillRect(pad+i*bw, pad+h-counts[i]/cmax*h, bw-1, counts[i]/cmax*h);}
    let mean=Ts.reduce((a,b)=>a+b,0)/Ts.length;
    let H=0; for(let i=1;i<=(p.n as number);i++) H+=1/i;
    const expected=(p.n as number)*H;
    ctx.fillStyle='#ffb454'; ctx.font='13px ui-monospace,monospace';
    ctx.fillText(`Mean ≈ ${mean.toFixed(1)}, n·Hₙ = ${expected.toFixed(1)}`, 12, 14);
  },
} satisfies Formula;
