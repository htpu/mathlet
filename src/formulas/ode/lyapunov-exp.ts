import type { Formula } from '../types';
import { n, i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'lyapunov-exp',title:'Lyapunov 指数（logistic）',domain:'ode',level:5,tex:'\\lambda=\\lim\\frac{1}{N}\\sum\\log|f\'(x_n)|',blurb:'λ>0 → 混沌；λ<0 → 周期。'},
  params:[n('rmin','r min',2.5,1,4,0.005),n('rmax','r max',4,1,4,0.005),i('N','迭代',2000,100,20000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const W=Math.floor(width); const padY=20; const H=height-padY*2;
    let maxL=0;
    const lams:number[]=[];
    for(let px=0;px<W;px++){const r=(p.rmin as number)+((p.rmax as number)-(p.rmin as number))*(px/W); let x=0.4, sum=0; for(let i=0;i<(p.N as number);i++){x=r*x*(1-x); if(i>50){const dxv=Math.abs(r*(1-2*x)); if(dxv>0) sum+=Math.log(dxv);}} const lam=sum/((p.N as number)-50); lams.push(lam); if(lam>maxL) maxL=lam;}
    ctx.strokeStyle='#cbccc6'; ctx.lineWidth=1;
    ctx.beginPath(); ctx.moveTo(0, padY+H/2); ctx.lineTo(width, padY+H/2); ctx.stroke();
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1.5; ctx.beginPath();
    for(let px=0;px<W;px++){const lam=lams[px]; const y=padY+H/2-lam*H/4;
      ctx.fillStyle=lam>0?'#f07178':'#39bae6';
      ctx.fillRect(px, padY+H/2, 1, -Math.max(-H/2, Math.min(H/2, lam*H/4)));}
  },
} satisfies Formula;
