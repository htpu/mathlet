import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'zeta2',title:'ζ(2)=π²/6 部分和',domain:'calculus',level:3,tex:'\\sum 1/n^2=\\pi^2/6',blurb:'Basel 问题：1+1/4+1/9+... = π²/6。',surface:'canvas2d'},
  params:[i('N','N',100,5,10000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    let S=0; for(let i=1;i<=(p.N as number);i++) S+=1/(i*i);
    const target=Math.PI*Math.PI/6;
    text(s,20,40,`部分和 (N=${p.N})  = ${S.toFixed(10)}`,'#ffb454',16);
    text(s,20,80,`π²/6              = ${target.toFixed(10)}`,'#39bae6',16);
    text(s,20,120,`差              = ${(target-S).toExponential(3)}`,'#f07178',14);
  },
} satisfies Formula;
