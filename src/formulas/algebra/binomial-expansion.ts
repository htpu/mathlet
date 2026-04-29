import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'binomial-expansion',title:'二项展开（帕斯卡三角）',domain:'algebra',level:2,tex:'(a+b)^n=\\sum\\binom{n}{k}a^{n-k}b^k',blurb:'帕斯卡三角的色块强度 = 二项系数大小。',surface:'canvas2d'},
  params:[i('N','行数',12,2,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    let row=[1n];
    const cw=Math.min(width/(N+1)*0.7, height/(N+1));
    for(let r=0;r<N;r++){
      let max=row.reduce((a,b)=>a>b?a:b);
      for(let c=0;c<row.length;c++){
        const t=Number(row[c])/Number(max);
        const x=width/2+(c-row.length/2+0.5)*cw;
        const y=20+r*cw;
        ctx.fillStyle=`rgba(255,180,84,${0.2+t*0.7})`;
        ctx.fillRect(x-cw/2+1, y-cw/2+1, cw-2, cw-2);
        if(cw>20){ctx.fillStyle='#cbccc6'; ctx.font=`${Math.floor(cw*0.4)}px ui-monospace,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(String(row[c]), x, y);}
      }
      const next=[1n]; for(let i=0;i<row.length-1;i++) next.push(row[i]+row[i+1]); next.push(1n); row=next;
    }
  },
} satisfies Formula;
