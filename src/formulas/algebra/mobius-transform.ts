import type { Formula } from '../types';
import { n } from '../types';
import { clear, drawAxes, setupView } from '../../render/canvas2d';
export default {
  meta: { slug:'mobius-transform', title:'莫比乌斯变换', domain:'algebra', level:4, tex:'w=\\frac{az+b}{cz+d}', blurb:'分式线性变换：圆映为圆，保共形。', surface:'canvas2d' },
  params: [n('a','a',1,-2,2,0.01), n('b','b',0,-2,2,0.01), n('c','c',0.3,-2,2,0.01), n('d','d',1,-2,2,0.01)],
  render(s,p){
    if(s.kind!=='canvas2d') return;
    const v={cx:0,cy:0,scale:Math.min(s.width,s.height)/6};
    clear(s); setupView(s,v); drawAxes(s,v);
    const {a,b,c,d}=p as any;
    const map=(x:number,y:number)=>{
      // (a*z+b)/(c*z+d) where z=x+iy
      const nr = a*x+b, ni = a*y;
      const dr = c*x+d, di = c*y;
      const den = dr*dr+di*di;
      return [(nr*dr+ni*di)/den, (ni*dr-nr*di)/den];
    };
    s.ctx.lineWidth=1.2/v.scale;
    for(let k=-3;k<=3;k++){
      // verticals
      s.ctx.strokeStyle='#39bae6';
      s.ctx.beginPath();
      for(let t=-3;t<=3;t+=0.05){const [x,y]=map(k,t); if(t===-3) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
      s.ctx.stroke();
      s.ctx.strokeStyle='#ffb454';
      s.ctx.beginPath();
      for(let t=-3;t<=3;t+=0.05){const [x,y]=map(t,k); if(t===-3) s.ctx.moveTo(x,y); else s.ctx.lineTo(x,y);}
      s.ctx.stroke();
    }
  },
} satisfies Formula;
