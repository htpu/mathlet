import type { Formula } from '../types';
import { i } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'euclid-algorithm',title:'欧几里得算法可视化',domain:'numbertheory',level:2,tex:'\\gcd(a,b)=\\gcd(b,a\\bmod b)',blurb:'矩形递归切正方形 → gcd。'},
  params:[i('a','a',144,1,500),i('b','b',89,1,500)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    let a=Math.max(p.a,p.b) as number, b=Math.min(p.a,p.b) as number;
    const sc=Math.min(width-40, height-40)/a;
    let x=20, y=20, dir=0; // 0:right 1:down
    const steps=10;
    let it=0;
    while(b>0&&it<30){const sq=b;
      ctx.strokeStyle=`hsl(${30+it*25},70%,55%)`; ctx.lineWidth=1.5;
      if(dir===0){ctx.strokeRect(x, y, sq*sc, sq*sc); x+=sq*sc;}
      else {ctx.strokeRect(x-sq*sc, y, sq*sc, sq*sc); y+=sq*sc;}
      const t=a-b; a=b; b=t%b; if(b===0) break;
      dir=1-dir;
      it++;
    }
    text(s,12,12,`gcd(${p.a}, ${p.b}) = ${a}`,'#ffb454',14);
  },
} satisfies Formula;
