import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
function isPrime(n:bigint):boolean{if(n<2n) return false; if(n<4n) return true; if(n%2n===0n) return false; for(let i=3n;i*i<=n;i+=2n) if(n%i===0n) return false; return true;}
export default {
  meta:{slug:'mersenne-primes',title:'Mersenne 素数 2^p−1',domain:'numbertheory',level:4,tex:'M_p=2^p-1',blurb:'p 素 ≠> M_p 素，但所有 M_p 素的 p 必素。'},
  params:[i('pmax','p 上限',31,3,61)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const pmax=p.pmax as number;
    let y=30;
    for(let pp=2;pp<=pmax;pp++){if(!isPrime(BigInt(pp))) continue;
      const M=(1n<<BigInt(pp))-1n;
      const isM=isPrime(M);
      ctx.fillStyle=isM?'#ffb454':'#39bae6';
      ctx.font='13px ui-monospace,monospace'; ctx.textAlign='left';
      ctx.fillText(`M_${pp} = ${M.toString().slice(0,40)}${M.toString().length>40?'...':''}  ${isM?'✓ Mersenne 素':''}`, 14, y);
      y+=22; if(y>height-20) break;
    }
  },
} satisfies Formula;
