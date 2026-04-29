import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'markov-power',title:'矩阵幂收敛于稳态',domain:'linalg',level:3,tex:'A^k\\to\\text{rank-1}',blurb:'随机矩阵 A^k 收敛 → 每行近似稳态分布。',surface:'canvas2d'},
  params:[i('k','幂次 k',5,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const A=[[0.7,0.2,0.1],[0.3,0.4,0.3],[0.1,0.3,0.6]];
    let R=A.map(r=>[...r]);
    for(let it=0;it<((p.k as number)-1);it++){
      const N=R.length; const M=Array.from({length:N},()=>new Array(N).fill(0));
      for(let i=0;i<N;i++) for(let j=0;j<N;j++) for(let kk=0;kk<N;kk++) M[i][j]+=R[i][kk]*A[kk][j];
      R=M;
    }
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const cw=Math.min(width,height)/4;
    const ox=(width-cw*3)/2, oy=(height-cw*3)/2;
    for(let i=0;i<3;i++) for(let j=0;j<3;j++){
      const v=R[i][j];
      ctx.fillStyle=`rgba(255,180,84,${0.2+v*0.7})`;
      ctx.fillRect(ox+j*cw, oy+i*cw, cw-2, cw-2);
      ctx.fillStyle='#cbccc6'; ctx.font=`${cw*0.25}px ui-monospace,monospace`; ctx.textAlign='center'; ctx.textBaseline='middle';
      ctx.fillText(v.toFixed(3), ox+j*cw+cw/2, oy+i*cw+cw/2);
    }
  },
} satisfies Formula;
