import type { Formula } from '../types';
import { n } from '../types';
const N=300;
let E:Float32Array, B:Float32Array; let last='';
export default {
  meta:{slug:'maxwell-em',title:'Maxwell EM 行波（1D Yee）',domain:'pde',level:5,tex:'E,B \\text{ 同相传播}',blurb:'电磁波在真空中以光速传播。',surface:'canvas2d',animated:true},
  params:[n('reset','reset',0,0,1,1)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const sig=`${p.reset}`;
    if(!E||last!==sig){E=new Float32Array(N); B=new Float32Array(N); for(let i=0;i<N;i++){const x=i/N-0.3; E[i]=Math.exp(-x*x*200);} last=sig;}
    const dt=0.4;
    for(let k=0;k<2;k++){
      for(let i=0;i<N-1;i++) B[i]=B[i]-dt*(E[i+1]-E[i]);
      for(let i=1;i<N;i++) E[i]=E[i]-dt*(B[i]-B[i-1]);
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const draw=(arr:Float32Array, color:string, yo:number, sc:number)=>{ctx.strokeStyle=color; ctx.lineWidth=2; ctx.beginPath();
      for(let i=0;i<N;i++){const x=i/N*width, y=yo-arr[i]*sc; if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);} ctx.stroke();};
    draw(E,'#ffb454',height/3, 80);
    draw(B,'#39bae6',2*height/3, 800);
    ctx.fillStyle='#cbccc6'; ctx.font='13px ui-monospace,monospace';
    ctx.fillText('E (橙)', 12, 18); ctx.fillText('B (蓝)', 12, height/3+18);
  },
} satisfies Formula;
