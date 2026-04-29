import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'recaman-sequence',title:'Recamán 序列',domain:'numbertheory',level:3,tex:'a_n=a_{n-1}-n \\text{ if not used else }+n',blurb:'用半圆连接相邻数 → 漂亮的螺旋图样。',surface:'canvas2d'},
  params:[i('N','N',50,5,300)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const a:number[]=[0]; const seen=new Set([0]);
    for(let i=1;i<=N;i++){const prev=a[i-1]; let next=prev-i; if(next<0||seen.has(next)) next=prev+i; a.push(next); seen.add(next);}
    let max=Math.max(...a);
    const sc=width/(max+10);
    const ay=height/2;
    ctx.strokeStyle='#ffb454'; ctx.lineWidth=1;
    for(let i=1;i<a.length;i++){const x1=20+a[i-1]*sc, x2=20+a[i]*sc;
      const cx=(x1+x2)/2, r=Math.abs(x2-x1)/2;
      const above=(i%2)===0;
      ctx.beginPath();
      ctx.arc(cx, ay, r, above?Math.PI:0, above?Math.PI*2:Math.PI, !above);
      ctx.stroke();
    }
  },
} satisfies Formula;
