import type { Formula } from '../types';
import { n } from '../types';
import { clear, text } from '../../render/canvas2d';
export default {
  meta:{slug:'cholesky',title:'Cholesky 分解',domain:'linalg',level:4,tex:'A=LL^T',blurb:'对称正定 A 唯一分解。'},
  params:[n('a','a',4,0.1,10,0.01),n('b','b',2,-5,5,0.01),n('d','d',3,0.1,10,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const a=p.a as number, b=p.b as number, d=p.d as number;
    if(a<=0){text(s,20,40,'a 必须>0','#f07178',16); return;}
    const l11=Math.sqrt(a); const l21=b/l11; const inner=d-l21*l21;
    if(inner<=0){text(s,20,40,'非正定（a·d-b² ≤ 0）','#f07178',16); return;}
    const l22=Math.sqrt(inner);
    text(s,20,40,`A = [${a.toFixed(2)}  ${b.toFixed(2)}; ${b.toFixed(2)}  ${d.toFixed(2)}]`,'#39bae6',16);
    text(s,20,80,`L = [${l11.toFixed(3)}  0; ${l21.toFixed(3)}  ${l22.toFixed(3)}]`,'#ffb454',16);
    text(s,20,120,`✓ 正定`,'#c2d94c',14);
  },
} satisfies Formula;
