import type { Formula } from '../types';
import { n, i } from '../types';
import { clear, drawAxes, setupView, fillCircle } from '../../render/canvas2d';
export default {
  meta:{slug:'power-iteration',title:'幂迭代求主特征向量',domain:'linalg',level:3,tex:'v_{k+1}=Av_k/\\|Av_k\\|',blurb:'收敛到主特征向量。'},
  params:[n('a','a',2,-3,3,0.01),n('b','b',1,-3,3,0.01),n('c','c',1,-3,3,0.01),n('d','d',2,-3,3,0.01),i('iter','迭代',10,1,30)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/3};
    clear(s); setupView(s,v); drawAxes(s,v);
    const {a,b,c,d}=p as any;
    let x=1, y=0;
    for(let k=0;k<(p.iter as number);k++){
      const nx=a*x+b*y, ny=c*x+d*y; const m=Math.hypot(nx,ny); if(m<1e-12) break;
      x=nx/m; y=ny/m;
      fillCircle(s,v,x,y,3+k*0.3,`hsl(${k*20},70%,55%)`);
    }
    s.ctx.strokeStyle='#ffb454'; s.ctx.lineWidth=2/v.scale;
    s.ctx.beginPath(); s.ctx.moveTo(-3*x,-3*y); s.ctx.lineTo(3*x,3*y); s.ctx.stroke();
  },
} satisfies Formula;
