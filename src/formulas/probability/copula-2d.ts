import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, fillCircle } from '../../render/canvas2d';
import { mulberry32, gaussian } from '../../render/numerics';
export default {
  meta:{slug:'copula-2d',title:'高斯 copula',domain:'probability',level:4,tex:'C(u,v)=\\Phi_\\rho(\\Phi^{-1}u,\\Phi^{-1}v)',blurb:'相关系数 ρ 决定联合分布形状。'},
  params:[n('rho','ρ',0.7,-0.95,0.95,0.01),i('N','点数',500,50,3000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const r=mulberry32(7);
    const rho=p.rho as number;
    const pad=24;
    function erf(x:number){const t=1/(1+0.3275911*Math.abs(x)); const y=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x); return x>=0?y:-y;}
    function Phi(x:number){return 0.5*(1+erf(x/Math.SQRT2));}
    for(let i=0;i<(p.N as number);i++){const z1=gaussian(r), z2=gaussian(r);
      const x=z1, y=rho*z1+Math.sqrt(1-rho*rho)*z2;
      const u=Phi(x), v=Phi(y);
      ctx.fillStyle='rgba(57,186,230,0.5)';
      ctx.beginPath(); ctx.arc(pad+u*(width-pad*2), pad+(1-v)*(height-pad*2), 2, 0, Math.PI*2); ctx.fill();
    }
    ctx.strokeStyle='#2d3340'; ctx.strokeRect(pad, pad, width-pad*2, height-pad*2);
  },
} satisfies Formula;
