import type { Formula } from '../types';
import { i } from '../types';
import { clear } from '../../render/canvas2d';
export default {
  meta:{slug:'cantor-set',title:'康托集',domain:'fractal',level:2,tex:'\\text{remove middle third}',blurb:'递归挖掉中间 1/3 区间。',surface:'canvas2d'},
  params:[i('iter','迭代',7,1,12)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const {ctx,width,height,dpr}=s; ctx.setTransform(dpr,0,0,dpr,0,0);
    ctx.fillStyle='#0a0e14'; ctx.fillRect(0,0,width,height);
    const padX=20, w=width-padX*2;
    const N=p.iter as number;
    const rowH=Math.min(20, (height-40)/N);
    let segs:[number,number][]=[[0,1]];
    for(let r=0;r<N;r++){
      ctx.fillStyle=`hsl(${30+r*15},70%,55%)`;
      for(const [a,b] of segs) ctx.fillRect(padX+a*w, 20+r*rowH, (b-a)*w, rowH-2);
      const next:[number,number][]=[];
      for(const [a,b] of segs){const t=(b-a)/3; next.push([a,a+t],[b-t,b]);}
      segs=next;
    }
  },
} satisfies Formula;
