import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'goldbach',title:'Goldbach 彗星',domain:'numbertheory',level:4,tex:'g(2n)=\\#\\{p+q=2n,p,q\\text{ prime}\\}',blurb:'每个偶数表示为两素数之和的方法数。'},
  params:[i('N','N',300,30,1500)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number;
    const isP=new Uint8Array(N+1); for(let i=2;i<=N;i++) isP[i]=1;
    for(let i=2;i*i<=N;i++) if(isP[i]) for(let j=i*i;j<=N;j+=i) isP[j]=0;
    const counts:number[]=[];
    for(let n=2;n<=N;n+=2){let c=0; for(let p=2;p<=n/2;p++) if(isP[p]&&isP[n-p]) c++; counts.push(c);}
    const max=Math.max(...counts);
    const padX=24, padY=24, w=width-padX*2, h=height-padY*2;
    for(let i=0;i<counts.length;i++){const x=padX+i/counts.length*w; const y=padY+h-counts[i]/max*h;
      ctx.fillStyle='#ffb454'; ctx.fillRect(x, y, 1.5, 1.5);}
  },
} satisfies Formula;
