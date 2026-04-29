import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'twin-primes',title:'孪生素数分布',domain:'numbertheory',level:4,tex:'p,p+2 \\text{ both prime}',blurb:'相差 2 的素数对密度。',surface:'canvas2d'},
  params:[i('N','N',1000,30,10000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const isP=new Uint8Array(N+1); for(let i=2;i<=N;i++) isP[i]=1;
    for(let i=2;i*i<=N;i++) if(isP[i]) for(let j=i*i;j<=N;j+=i) isP[j]=0;
    const padX=24, padY=24, w=width-padX*2, h=height-padY*2;
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=1.5; ctx.beginPath();
    let cnt=0; let started=false;
    for(let n=3;n<=N-2;n++){if(isP[n]&&isP[n+2]) cnt++;
      const x=padX+(n-3)/(N-3)*w; const y=padY+h-cnt/Math.max(1,cnt+10)*h*0.7;
      if(!started){ctx.moveTo(x,y); started=true;} else ctx.lineTo(x,y);}
    ctx.stroke();
    ctx.fillStyle='#ffb454'; ctx.font='14px ui-monospace,monospace';
    ctx.fillText(`孪生素数对 ≤ ${N}: ${cnt}`, 12, 14);
  },
} satisfies Formula;
