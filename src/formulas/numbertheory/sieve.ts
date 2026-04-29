import type { Formula } from '../types';
import { i } from '../types';
export default {
  meta:{slug:'sieve',title:'埃拉托斯特尼筛',domain:'numbertheory',level:1,tex:'p\\text{ prime}\\Rightarrow\\text{strike } 2p,3p,...',blurb:'2..N 网格中筛除合数，留素数。'},
  params:[i('N','N',200,30,5000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const N=p.N as number;
    const composite=new Uint8Array(N+1);
    composite[0]=composite[1]=1;
    for(let i=2;i*i<=N;i++) if(!composite[i]) for(let j=i*i;j<=N;j+=i) composite[j]=1;
    const cols=Math.ceil(Math.sqrt(N+1));
    const rows=Math.ceil((N+1)/cols);
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const cw=Math.floor(Math.min(width/cols, height/rows));
    const ox=(width-cw*cols)/2, oy=(height-cw*rows)/2;
    for(let n=2;n<=N;n++){const r=Math.floor((n-2)/cols), c=(n-2)%cols;
      ctx.fillStyle=composite[n]?'#1f2430':'#ffb454';
      ctx.fillRect(ox+c*cw+1, oy+r*cw+1, cw-2, cw-2);
      if(cw>10){ctx.fillStyle=composite[n]?'#4d5566':'#0a0e14'; ctx.font=`${Math.floor(cw*0.4)}px ui-monospace,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(String(n), ox+c*cw+cw/2, oy+r*cw+cw/2);}
    }
  },
} satisfies Formula;
