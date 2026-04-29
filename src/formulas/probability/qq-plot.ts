import type { Formula } from '../types';
import { i, s as sel } from '../types';
import { clear } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'qq-plot',title:'Q-Q 图',domain:'probability',level:3,tex:'Q_{\\text{data}}\\text{ vs }Q_{\\text{normal}}',blurb:'比较样本分位数与正态分位数。'},
  params:[i('N','样本数',200,30,2000), sel('dist','样本分布','normal',[{value:'normal',label:'正态'},{value:'exp',label:'指数'},{value:'unif',label:'均匀'}])],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const r=mulberry32(7);
    const N=p.N as number;
    const data:number[]=[];
    for(let i=0;i<N;i++){if(p.dist==='normal') data.push(gaussian(r));
      else if(p.dist==='exp') data.push(-Math.log(r()));
      else data.push(r()*4-2);}
    data.sort((a,b)=>a-b);
    function erfinv(x:number){let z=x; for(let i=0;i<10;i++){const e=2/Math.sqrt(Math.PI)*Math.exp(-z*z); z=z-(erf(z)-x)/e;} return z;}
    function erf(x:number){const t=1/(1+0.3275911*Math.abs(x)); const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x); return x>=0?y:-y;}
    const pad=24, w=width-pad*2, h=height-pad*2;
    const min=Math.min(data[0],-3), max=Math.max(data[N-1],3);
    ctx.strokeStyle='#2d3340'; ctx.lineWidth=1; ctx.beginPath(); ctx.moveTo(pad+(0-min)/(max-min)*w, pad+h-(0-min)/(max-min)*h);
    ctx.moveTo(pad,pad+h); ctx.lineTo(pad+w,pad); ctx.stroke();
    for(let i=0;i<N;i++){const q=erfinv(2*((i+0.5)/N)-1)*Math.SQRT2;
      const px=pad+(q-min)/(max-min)*w, py=pad+h-(data[i]-min)/(max-min)*h;
      ctx.fillStyle='#ffb454'; ctx.beginPath(); ctx.arc(px,py,2,0,Math.PI*2); ctx.fill();}
  },
} satisfies Formula;
