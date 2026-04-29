import type { Formula } from '../types';
import { i } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'totient-summatory',title:'Φ(n)=Σφ(k)',domain:'numbertheory',level:4,tex:'\\Phi(n)=\\sum_{k=1}^n\\varphi(k)\\sim\\frac{3n^2}{\\pi^2}',blurb:'totient 求和 ~ 3n²/π²。'},
  params:[i('N','N',100,10,500)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number;
    const phi=new Array(N+1).fill(0);
    for(let n=1;n<=N;n++){let c=0; for(let k=1;k<=n;k++) if(gcd(k,n)===1) c++; phi[n]=c;}
    const Phi:number[]=[0]; for(let n=1;n<=N;n++) Phi.push(Phi[n-1]+phi[n]);
    const max=Phi[N];
    const v={cx:N/2,cy:max/2,scale:Math.min(s.width/(N*1.05), s.height/(max*1.1))};
    clear(s); setupView(s,v); drawAxes(s,v,{grid:false});
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale; s.ctx.beginPath();
    for(let n=0;n<=N;n++){if(n===0) s.ctx.moveTo(n,Phi[n]); else s.ctx.lineTo(n,Phi[n]);}
    s.ctx.stroke();
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.5/v.scale; s.ctx.beginPath();
    for(let n=0;n<=N;n++){const t=3*n*n/(Math.PI*Math.PI); if(n===0) s.ctx.moveTo(n,t); else s.ctx.lineTo(n,t);}
    s.ctx.stroke();
  },
} satisfies Formula;
