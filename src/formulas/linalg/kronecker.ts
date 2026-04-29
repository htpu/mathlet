import type { Formula } from '../types';
import { n } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'kronecker',title:'Kronecker 乘积（块结构）',domain:'linalg',level:4,tex:'A\\otimes B',blurb:'2x2 ⊗ 2x2 = 4x4 块矩阵。'},
  params:[n('a','a',1,-2,2,0.01),n('b','b',2,-2,2,0.01),n('c','c',-1,-2,2,0.01),n('d','d',1,-2,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const A=[[p.a,p.b],[p.c,p.d]] as number[][];
    const B=[[p.a,p.b],[p.c,p.d]] as number[][];
    const K=Array.from({length:4},()=>new Array(4).fill(0));
    for(let i=0;i<2;i++) for(let j=0;j<2;j++) for(let k=0;k<2;k++) for(let l=0;l<2;l++) K[i*2+k][j*2+l]=A[i][j]*B[k][l];
    let max=0; for(let i=0;i<4;i++) for(let j=0;j<4;j++) max=Math.max(max,Math.abs(K[i][j]));
    const cw=Math.min(width,height)/5;
    const ox=(width-cw*4)/2, oy=(height-cw*4)/2;
    for(let i=0;i<4;i++) for(let j=0;j<4;j++){const v=K[i][j]; const t=Math.abs(v)/max;
      ctx.fillStyle=v>=0?`rgba(255,180,84,${t})`:`rgba(240,113,120,${t})`;
      ctx.fillRect(ox+j*cw, oy+i*cw, cw-2, cw-2);
      ctx.fillStyle='#cbccc6'; ctx.font=`${cw*0.25}px ui-monospace,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(v.toFixed(1), ox+j*cw+cw/2, oy+i*cw+cw/2);
    }
    // separators
    ctx.strokeStyle='#39bae6'; ctx.lineWidth=2;
    ctx.strokeRect(ox, oy, cw*2, cw*2); ctx.strokeRect(ox+cw*2, oy, cw*2, cw*2);
    ctx.strokeRect(ox, oy+cw*2, cw*2, cw*2); ctx.strokeRect(ox+cw*2, oy+cw*2, cw*2, cw*2);
  },
} satisfies Formula;
