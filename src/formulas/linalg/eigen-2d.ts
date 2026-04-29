import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta:{slug:'eigen-2d',title:'2D 特征向量',domain:'linalg',level:3,tex:'A v=\\lambda v',blurb:'实特征向量沿矩阵作用方向不变。',surface:'canvas2d'},
  params:[n('a','a',2,-3,3,0.01),n('b','b',1,-3,3,0.01),n('c','c',1,-3,3,0.01),n('d','d',2,-3,3,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/8};
    clear(s); setupView(s,v); drawAxes(s,v);
    const a=p.a as number,b=p.b as number,c=p.c as number,d=p.d as number;
    s.ctx.strokeStyle='#39bae6'; s.ctx.lineWidth=1.2/v.scale;
    s.ctx.beginPath(); s.ctx.arc(0,0,1,0,Math.PI*2); s.ctx.stroke();
    s.ctx.strokeStyle='#ffb454';
    s.ctx.beginPath();
    for(let t=0;t<=Math.PI*2;t+=0.01){const x=Math.cos(t),y=Math.sin(t); const tx=a*x+b*y, ty=c*x+d*y; if(t===0) s.ctx.moveTo(tx,ty); else s.ctx.lineTo(tx,ty);}
    s.ctx.stroke();
    const tr=a+d, det=a*d-b*c;
    const disc=tr*tr-4*det;
    if(disc>=0){const l1=(tr+Math.sqrt(disc))/2, l2=(tr-Math.sqrt(disc))/2;
      for(const l of [l1,l2]){let vx=1,vy=0;
        if(Math.abs(b)>1e-9){vx=b; vy=l-a;} else if(Math.abs(c)>1e-9){vx=l-d; vy=c;}
        const m=Math.hypot(vx,vy); if(m<1e-9) continue;
        vx/=m; vy/=m;
        s.ctx.strokeStyle='#f07178'; s.ctx.lineWidth=2.5/v.scale;
        s.ctx.beginPath(); s.ctx.moveTo(-3*vx,-3*vy); s.ctx.lineTo(3*vx,3*vy); s.ctx.stroke();
      }
    }
  },
} satisfies Formula;
