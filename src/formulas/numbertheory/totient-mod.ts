import type { Formula } from '../types';
import { i } from '../types';
function gcd(a:number,b:number):number{return b===0?a:gcd(b,a%b);}
export default {
  meta:{slug:'totient-mod',title:'与 N 互素的数（mod N）',domain:'numbertheory',level:3,tex:'\\{k:\\gcd(k,N)=1\\}',blurb:'圆周 N 等分，互素位置标黄。',surface:'canvas2d'},
  params:[i('N','N',24,3,200)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const cx=width/2, cy=height/2; const R=Math.min(width,height)/2.4;
    const N=p.N as number;
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1; ctx.beginPath(); ctx.arc(cx,cy,R,0,Math.PI*2); ctx.stroke();
    let phi=0;
    for(let k=0;k<N;k++){const a=2*Math.PI*k/N;
      const co=gcd(k,N)===1;
      if(co) phi++;
      ctx.fillStyle=co?'#ffb454':'#2d3340';
      ctx.beginPath(); ctx.arc(cx+R*Math.cos(a), cy+R*Math.sin(a), 5, 0, Math.PI*2); ctx.fill();
    }
    ctx.fillStyle='#cbccc6'; ctx.font='14px ui-monospace,monospace'; ctx.fillText(`φ(${N}) = ${phi}`, 12, 18);
  },
} satisfies Formula;
