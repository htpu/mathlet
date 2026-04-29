import type { Formula } from '../types';
import { n, s as sel } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'convolution',title:'卷积',domain:'signals',level:3,tex:'(f*g)(t)=\\int f(\\tau)g(t-\\tau)d\\tau',blurb:'方波 * 高斯 = 平滑后的版本。'},
  params:[n('w','方波宽',0.4,0.05,1,0.01),n('sigma','高斯 σ',0.1,0.02,0.5,0.005)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=400;
    const f=new Float64Array(N), g=new Float64Array(N), c=new Float64Array(N);
    const w=p.w as number, sigma=p.sigma as number;
    for(let i=0;i<N;i++){const x=i/N-0.5; f[i]=Math.abs(x)<w/2?1:0; g[i]=Math.exp(-(x*x)/(2*sigma*sigma));}
    const sumG=g.reduce((a,b)=>a+b,0)/N;
    for(let i=0;i<N;i++){let v=0; for(let j=0;j<N;j++){const k=(i-j+N)%N; v+=f[j]*g[k];} c[i]=v/N/sumG/N*0.6;}
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const draw=(arr:Float64Array, color:string, yo:number)=>{ctx.strokeStyle=color; ctx.lineWidth=1.5; ctx.beginPath();
      for(let i=0;i<N;i++){const x=(i/N)*width, y=yo-arr[i]*60; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);} ctx.stroke();};
    const h=height/3;
    draw(f,'#39bae6',h*0.7);
    draw(g,'#c2d94c',h*1.7);
    draw(c,'#ffb454',h*2.7);
    ctx.fillStyle='#cbccc6'; ctx.font='12px ui-monospace,monospace';
    ctx.fillText('f(t) 方波', 10, h*0.3);
    ctx.fillText('g(t) 高斯', 10, h*1.3);
    ctx.fillText('(f*g)(t) 卷积结果', 10, h*2.3);
  },
} satisfies Formula;
