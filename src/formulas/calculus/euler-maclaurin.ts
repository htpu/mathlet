import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'euler-maclaurin',title:'Euler-Maclaurin 公式',domain:'calculus',level:5,tex:'\\sum_{k=1}^n f(k)\\approx\\int_1^n f+\\frac{f(1)+f(n)}{2}',blurb:'离散和与积分的桥梁。'},
  params:[i('N','N',100,5,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number; const f=(x:number)=>1/(x*x);
    let S=0; for(let k=1;k<=N;k++) S+=f(k);
    const I=1-1/N; // ∫1^N x^-2 dx
    const corr=I+(f(1)+f(N))/2;
    text(s,20,30,`Σ_{k=1}^{${N}} 1/k² = ${S.toFixed(8)}`,'#39bae6',16);
    text(s,20,60,`∫1^${N} 1/x² dx = ${I.toFixed(8)}`,'#ffb454',16);
    text(s,20,90,`E-M (1阶) = ${corr.toFixed(8)}`,'#c2d94c',16);
    text(s,20,130,`真值 ζ(2) = ${(Math.PI*Math.PI/6).toFixed(8)}`,'#f07178',16);
    text(s,20,160,`Σ-E-M 误差 = ${(S-corr).toFixed(8)}`,'#cbccc6',13);
  },
} satisfies Formula;
