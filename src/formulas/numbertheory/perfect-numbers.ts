import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
function divsum(n:number){let s=1; for(let i=2;i*i<=n;i++) if(n%i===0){s+=i; if(i!==n/i) s+=n/i;} return s;}
export default {
  meta:{slug:'perfect-numbers',title:'完全数 / 亏数 / 盈数',domain:'numbertheory',level:2,tex:'\\sigma(n)-n=n?',blurb:'σ(n)=2n 完全；<2n 亏；>2n 盈。'},
  params:[i('N','N',100,10,1000)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const N=p.N as number; const cols=Math.ceil(Math.sqrt(N));
    const cw=Math.min(width,height)/cols;
    const ox=(width-cw*cols)/2, oy=(height-cw*cols)/2;
    for(let n=2;n<=N;n++){const r=Math.floor((n-2)/cols), c=(n-2)%cols; const ds=divsum(n);
      ctx.fillStyle=ds===n?'#ffb454':ds<n?'#2d3340':'#f07178';
      ctx.fillRect(ox+c*cw+1, oy+r*cw+1, cw-2, cw-2);}
    text(s,12,12,'橙=完全 红=盈 灰=亏','#cbccc6',12);
  },
} satisfies Formula;
