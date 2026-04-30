import { i } from '../types';
import type { Formula } from '../types';
const f:Formula = {
  meta:{slug:'bipartite-matching',title:'二部图匹配',domain:'graph',level:3,tex:'\\text{König theorem: max matching = min cover}',blurb:'两侧节点最优配对。',surface:'canvas2d'},
  params:[i('n','每边节点',6,3,12)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width:W,height:H,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,W,H);
    const N=p.n as number;
    const left:[number,number][]=[], right:[number,number][]=[];
    for(let i=0;i<N;i++){left.push([W*0.3, 40+(H-80)*i/(N-1)]); right.push([W*0.7, 40+(H-80)*i/(N-1)]);}
    ctx.strokeStyle='#3a3f4b'; ctx.lineWidth=0.6;
    for(let i=0;i<N;i++) for(let j=0;j<N;j++) if((i+j)%3!==0){ctx.beginPath(); ctx.moveTo(left[i][0],left[i][1]); ctx.lineTo(right[j][0],right[j][1]); ctx.stroke();}
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2.5;
    for(let i=0;i<N;i++){const j=(i+1)%N; ctx.beginPath(); ctx.moveTo(left[i][0],left[i][1]); ctx.lineTo(right[j][0],right[j][1]); ctx.stroke();}
    ctx.fillStyle='#ffb454';
    for(const [x,y] of left){ctx.beginPath(); ctx.arc(x,y,6,0,Math.PI*2); ctx.fill();}
    ctx.fillStyle='#c2d94c';
    for(const [x,y] of right){ctx.beginPath(); ctx.arc(x,y,6,0,Math.PI*2); ctx.fill();}
  },
};
export default f;
